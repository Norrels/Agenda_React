export function tempoParaSegundos(tempo:string){
    const[horas, minutos, segundos] = tempo.split(':')

    const horasEmSegundos = Number(horas) * 3600
    const minutosEmSegundos = Number(minutos) * 60

    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}