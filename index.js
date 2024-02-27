let Vitoria = getValores (122)
let Derrota = getValores (20)
let saldoVitorias = (Vitoria - Derrota)

//console.log("o valor da sua vitoria e " + Vitoria)
//console.log("o valor da sua derrota e " + Derrota)

function getValores(vitoria, derrota){
    let saldoVitorias = vitoria
    return vitoria
    
}
if(saldoVitorias <= 10){ 
    console.log((" O Herói tem de saldo: ") + saldoVitorias + ( " \n e está no nível Ferro ")); 

    }else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    console.log((" O Herói tem de saldo: ") + saldoVitorias + ( " \n e está no nível Bronze "));

        }else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        console.log((" O Herói tem de saldo ") + saldoVitorias + (" \n e está no nível Prata "));
    }
        else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        console.log((" O Herói tem de saldo: ") + saldoVitorias + (" \n e está no nível Ouro ")) ;
        }
        else if (saldoVitorias >= 81 && saldoVitorias <= 90){
            console.log((" O Herói tem de saldo: ") + saldoVitorias + (" \n e está no nível Diamante "));
        }
        else if (saldoVitorias >= 91 && saldoVitorias <= 100){
            console.log((" O Herói tem de saldo: ") + saldoVitorias + ( " \n e está no nível Lendario "));
     }
      else if ( saldoVitorias >= 102 ){
       console.log ((" O Herói tem de saldo: ") + saldoVitorias + ( " \n e está no nível Imortal "))
        
    }