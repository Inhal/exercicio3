

class hero{
  constructor(nome,idade,tipo){
    let ataque
    if(tipo == 'mago'){
        ataque = "magia" 
    }
    else if(tipo == 'guerreiro'){
      ataque = "espada" 

    }
    else if(tipo =='monge'){
      ataque = "artes marciais" 

    }
    else if(tipo == 'ninja'){
      ataque = "shuriken" 

    }
    console.log(`o ${tipo} atacou usando ${ataque}`);
  }
}

new hero ('joão',25,'mago')



















