class ControleDeAudio {
    volume : number = 2;

    aumentarVolume (): void{
        if (this.volume <10){
            this.volume += 1
            }
        }
    
    diminuirVolume(): void {
        if (this.volume > 0){
            this.volume -= 1
        }
    }
    lerVolume(): number {
        return this.volume
    }
    }

let controle = new ControleDeAudio();
controle.aumentarVolume();
console.log(controle.lerVolume()); 
controle.diminuirVolume();
console.log(controle.lerVolume()); 
