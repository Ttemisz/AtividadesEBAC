let arrayDeObjetos = [];

class alunos{

    constructor(nome,nota){
        this.nome = nome;
        this.nota = nota;
    }
}


const aluno1 = new alunos('junior',6);
const aluno2 = new alunos('gleybson',5);
const aluno3 = new alunos('alejandro',10);
const aluno4 = new alunos('juca',9);
const aluno5 = new alunos('brena',3);

arrayDeObjetos = arrayDeObjetos.concat(aluno1);
arrayDeObjetos = arrayDeObjetos.concat(aluno2);
arrayDeObjetos = arrayDeObjetos.concat(aluno3);
arrayDeObjetos = arrayDeObjetos.concat(aluno4);
arrayDeObjetos = arrayDeObjetos.concat(aluno5);

console.log(arrayDeObjetos);


function retornarAprovados(){
    
    const aprovados = arrayDeObjetos.filter(function(aluno){
        return aluno.nota >= 6;
    });
    
    console.log(aprovados);
}


retornarAprovados()




