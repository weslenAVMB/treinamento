class Pessoa {
    constructor(nome,sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Getters
    get nomeSobrenome(){
        return this.nomeCompleto()
    }

    nomeCompleto(){
        return this.nome + " " + this.sobrenome
    }

}

const P = new Pessoa("Weslen", "Santos")

console.log(P.nomeSobrenome)