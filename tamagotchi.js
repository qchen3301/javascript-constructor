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
        console.log(`${this.name}'s current food in tummy: ${this.foodInTummy}`)
    }
    puke(){
        this.foodInTummy--
        console.log(`${this.name}'s current food in tummy: ${this.foodInTummy} WAHHHH!!!!`)
    }
    yawn(){
        this.restedness--
        console.log(`${this.name}'s has a current restedness of: ${this.restedness}`)
    }
    start(){
        setInterval(this.hunger(), 6000)
        setInterval(this.yawn(), 10000)
        setInterval(this.puke(), 20000)
    }
    stop(){
        clearInterval(this.hunger())
        clearInterval(this.yawn())
        clearInterval(this.puke())
    }
}

//create new Tamagotchis
let Agghiitchi = new Tamagotchi('Mafu', 'Agghiitchi')
let Kughipatchi = new Tamagotchi('Chuuha', 'Kughipatchi')

let Agghi2 = new Tamagotchi('Gaki', 'Agghiitchi')
let Kughi2 = new Tamagotchi('Kugi', 'Kughipatchi')

let Agghi3 = new Tamagotchi('Nanba', 'Agghiitchi')
let Kughi3 = new Tamagotchi('Muuta', 'Kughipatchi')

//test out your Tamagotchies below via console.logs
console.log(Agghiitchi)
console.log(Kughipatchi)

console.log(Agghiitchi.cry())
console.log(Kughipatchi.cry())
console.log(Agghi2.cry())
console.log(Kughi2.cry())
console.log(Agghi3.puke())
console.log(Kughi3.yawn())