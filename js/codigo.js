
            // 1 es piedra, papel es 2 y tijera 3
            function aletorio (min,max){
                return Math.floor(Math.random() * (max-min+1)+min)
                
            }
            function jugada(eleccion){
                if (eleccion == 1){
                    return "🥌"
                } else if (eleccion == 2){
                    return "📃"
                } else if (eleccion == 3){
                    return "✂"
                }

                return "INVALID";

                
            }
            let jugador= 0
            let pc= 0
            let wins=0
            let loses=0
            let ties=0
            let N_try=0
            const MAXTRIES=5
            let matches= 0

            function checkIfValid(value) {
                return value >= 1 && value <= 3;
            }
            function checkValidAttemps(attemps) {
                return attemps < MAXTRIES
            } 
            while( matches < 3 ){
                do {
                    pc = aletorio(1,3)
                    jugador=prompt("elige: 1 para piedra, 2 para papel y 3 para tijera")
                    alert("Elegiste " + jugada(jugador) )
                    
                    if (checkIfValid(jugador) == false) {
                        jugador=null
                        alert('Por favor, selecciona un numero entre 1 y 3.')
                        alert(N_try + 1) 
                        N_try= N_try + 1;
                        if (checkValidAttemps(N_try) == false){
                            alert("too many failed attemps")
                            break;
                            
                        }
                    
                 
                    }

                }   
                while (!checkIfValid(jugador)  || !checkValidAttemps(N_try));

                if (!jugador) { 
                    alert("el jugador no eligio")
                    break;
                }

           
            alert("El Rival eligio" + jugada(pc))

             //Combate
            if( jugador == pc){
                 alert("Empate")
                 ties++;
            } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2  ){
                 alert("Ganaste")
                 wins= wins + 1
            } else{
                 alert("Perdiste")
                 loses= loses + 1
            }
                 
                 matches= wins + loses + ties;


            }
            if (matches > 0){

            
            alert ("Ganaste " + wins + " veces. Perdistes " + loses + " veces. Empataron " + ties + " veces" )
        }
            
        