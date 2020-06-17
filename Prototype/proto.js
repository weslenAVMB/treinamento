var Pessoa = function(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype = function(){
    
    this.verificaIdade = function(){
        if(this.idade < 14 ){
            alert("Você deve ter mais de 14 anos de idade");
        }else{
            return true
        }
    }

    this.verificaCampos = function(){
        if(this.nome == "" || this.sobrenome  == ""){
            alert("Preencha todos os campos")
        }else{
            return true
        }
    },

    this.handleSubmit = function(){
        if(this.verificaCampos() && this.verificaIdade()){
            console.log('cadastrar')
        }
    },

    this.innerHTML = function(){
        
    }
}

var p = new Pessoa.prototype

//Botão
const btnSubmit = document.getElementById("cadastrar")

//Listeners
btnSubmit.addEventListener("click", handleSubmit)

//Functions
function handleSubmit(){

    //Inputs
    var nome = document.getElementById("nome").value
    var sobrenome = document.getElementById("sobrenome").value
    var idade = document.getElementById("idade").value

    p.nome = nome
    p.sobrenome = sobrenome
    p.idade = idade
    p.handleSubmit()
}