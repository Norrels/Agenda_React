import Botao from "../botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { ITarefa } from '../../types/Tarefas'  
import { tempoParaSegundos } from '../../common/utils/time'
import { useEffect, useState} from 'react';

interface Props {selecionado: ITarefa| undefined}

export function Cronometro({selecionado}:Props){   
    const[tempo, setTempo] = useState<number>()

    useEffect(()=>
            {if(selecionado?.tempo){setTempo(tempoParaSegundos(selecionado?.tempo))}})

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador> 0 ){
                setTempo(contador-1)
                return regressiva(contador-1)
            }
        }, 1000)
    }
     return(
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha uma tarefa e inicie o Cronometro</p>
            Tempo : {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>    
            </div>
            <Botao onClick={( ) => regressiva(tempo)}>
                Iniciar!
            </Botao>
        </div>
    )
}