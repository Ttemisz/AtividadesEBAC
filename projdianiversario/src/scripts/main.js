AOS.init();

const dataDoEvento = new Date("jun 29, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

    if (distanciaAteOEvento >= 0) {
        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
        
    } else if (distanciaAteOEvento < 0 && distanciaAteOEvento >= -86400000) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Chegou, hoje e meu aniversario Mande um parabéns para mim e um presente!!!';
    } else {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Infelizmente meu aniversário passou, mas fique à vontade para mandar um presente e um parabéns para mim :)';
    }
}, 1000);
