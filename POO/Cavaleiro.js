class Cavaleiro {
    constructor(nome, tipo, forca, constelacao, ataque) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.constelacao = constelacao;
        this.ataque = ataque;
    }
}

class Ouro extends Cavaleiro {
    constructor(nome, tipo, forca, constelacao, casa, ataque) {
        super(nome, tipo, forca, constelacao, ataque);
        this.casa = casa;
    }
}


class Prata extends Cavaleiro{
    constructor(nome, tipo, forca, constelacao,local, ataque){
        super(nome,tipo,forca,constelacao,ataque)
        this.local=local;
    }
}
class Bronze extends Cavaleiro {
    constructor(nome, tipo, forca, constelacao, posicaotorneio, ataque) {
        super(nome, tipo, forca, constelacao, ataque);
        this.posicaotorneio = posicaotorneio;
    }
}


const cavaleiroOuro6 = new Ouro('Máscara da Morte', 'Ouro', 10, 'Câncer', 'Sexta Casa', 'Ondas do Inferno');
const cavaleiroBronze1 = new Bronze('Seiya', 'Bronze', 6, 'Pégasus', 1, 'Meteoro de Pégasus');
const cavaleiroOuro2 = new Ouro('Aldebaran', 'Ouro', 10, 'Touro', 'Segunda Casa', 'Grande Chifre');
const cavaleiroPrata = new Prata('Orfeu ','Prata',10,'lira','inferno',' Serenata da Viagem da Morte')

console.log(cavaleiroOuro2);
console.log(cavaleiroOuro6);
console.log(cavaleiroBronze1);
console.log(cavaleiroPrata);
