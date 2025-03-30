class personagem{
    constructor(nome, hp){
        this.nome = nome
        this.hp = hp
    }
    escrever(){
        console.log(`O personagem ${this.nome} de HP ${this.hp} entrou na partida`)
}
    receberDano(dano){
        this.hp -= dano
            if (this.hp <0) this.hp = 0
            console.log(`${this.nome} agora tem ${this.hp} HP restantes após o dano sofrido.`)
        

}
}

class socoPersonagem{
    constructor(socoFraco, danoSocoFraco){
        this.socoFraco = socoFraco
        this.danoSocoFraco = danoSocoFraco
        
    }

    ataque(personagem) {
        console.log(`O personagem ${personagem.nome} recebeu um dano de ${this.socoFraco} e resultou em um dano de ${this.danoSocoFraco} HP`)
         personagem.receberDano(this.danoSocoFraco)
     }
     
}


let statPersonagem = new personagem ("Ramon", 100)
let atkPersonagem = new socoPersonagem("soco fraco", 40)
statPersonagem.escrever()
atkPersonagem.ataque(statPersonagem)