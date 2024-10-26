"use strict";
class ControleDeAudio {
    constructor() {
        this.volume = 2;
    }
    aumentarVolume() {
        if (this.volume < 10) {
            this.volume += 1;
        }
    }
    diminuirVolume() {
        if (this.volume > 0) {
            this.volume -= 1;
        }
    }
    lerVolume() {
        return this.volume;
    }
}
let controle = new ControleDeAudio();
controle.aumentarVolume();
console.log(controle.lerVolume());
controle.diminuirVolume();
console.log(controle.lerVolume());
