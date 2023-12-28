class heroi {
	constructor(classe, nome, idade) {
        this.classe = tipo
        this.nome = nome
    	this.idade = idade
        
        if(this.classe === "guerreiro"){
        	this.ataque = "espada"
        }else if(this.classe === "mago"){
        	this.ataque = "magia"
        }else if(this.classe === "monge"){
        	this.ataque = "artes marciais"
        }else if(this.classe === "ninja"){
        	this.ataque = "shuriken"
        }
    }
    
    definirAtaque() {
        console.log(`O ${this.classe} e atacou usando ${this.ataque}!`)
    }
}

let personagem = new heroi ("mago")
let character = new heroi ("ninja")
let id = new heroi ("guerreiro")
let person = new heroi ("monge")

personagem.definirAtaque()
character.definirAtaque()
id.definirAtaque()
person.definirAtaque()





