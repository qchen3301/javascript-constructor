console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType){
        this.name = name
        this.creatureType = creatureType
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }
    
    cry(){
        this.foodInTummy--
        console.log("The Tamagotchi is crying!!! WAAAH!!!!!")
        console.log('My Tamagotchi\'s name is ' + this.name)
        console.log(`current food in tummy: ${this.foodInTummy}`)
    }
}

//create new Tamagotchis
let Agghiitchi = new Tamagotchi('Mafu', 'Agghiitchi')
let Kughipatchi = new Tamagotchi('Chuuha', 'Kughipatchi')

let Agghi2 = new Tamagotchi('Gaki', 'Agghiitchi')
let Kughi2 = new Tamagotchi('Kugi', 'Kughipatchi')

//test out your Tamagotchies below via console.logs
console.log(Agghiitchi)
console.log(Kughipatchi)

console.log(Agghiitchi.cry())
console.log(Kughipatchi.cry())
console.log(Agghi2.cry())
console.log(Kughi2.cry())
