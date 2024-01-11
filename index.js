//classe para os herois
class heroi {
    constructor (nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo}
    
 //funçao para atacar e usar diferentes ataques dependendo do heroi
    atacar(){
        let ataque = ""
        if(this.tipo === "mago")
            {ataque="magia"}
        else if(this.tipo === "guerreiro")
            {ataque="espada"}
        else if(this.tipo === "monge")
            {ataque="artes marciais"}
        else{ataque="shuriken"}     
//exibir o texto com o ataque do heroi selecionado
        console.log(`o ${this.tipo} atacou usando `+ ataque)
    }
  
}
let ataque=" "
 let jogador1 = new heroi("Ester","18","mago")
 let jogador2 = new heroi("Ruan","22","guerreiro")
 let jogador3 = new heroi("isaque","18","monge")
 let jogador4 = new heroi("Beatriz","16","ninja")

 jogador1.atacar()
 jogador2.atacar()
 jogador3.atacar()
 jogador4.atacar()

