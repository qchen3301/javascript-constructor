console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy--
        console.log("The Tamagotchi is crying!!! WAAAH!!!!!")
        console.log(`current food in tummy: ${this.foodInTummy}`)
    }
}

//create new Tamagotchis
let Agghiitchi = new Tamagotchi()
let Kughipatchi = new Tamagotchi()

//test out your Tamagotchies below via console.logs
console.log(Agghiitchi)
console.log(Kughipatchi)

console.log(Agghiitchi.cry())
console.log(Kughipatchi.cry())