class Car {
    constructor(name,color,country){
        this.name=name
        this.color=color
        this.country=country
    }
        Car=true
automakers(){
    console.log(`${this.country} is a country of this car`)
    }
}
const machine=new Car('BMW','black','Germany')
machine.automakers()
console.log(machine)

class PassengerCar extends Car {
    constructor(color=null,country=null,brand=null,maker=null){
    super('BMW',color,country)
    this.brand=brand
    this.maker=maker
    }
    abbrevation(){
        console.log(`${this.name} is a Bayeriche Motoren Werke.`)
    }
}
const BMW=new PassengerCar('black','Germany','BMW X5','Karl Rapp',true)
BMW.abbrevation()
console.log(BMW)

class PasCar1 extends PassengerCar {
    constructor(color=null,country=null,brand=null,maker=null,products=null){
        super(color,country,brand,maker)
        this.products=products
    }
}
const BMWX6=new PasCar1('white','Italy','BMWX6','Karl Rapp','sport car',true)
const Ferrari=new PasCar1('yellow','Italy','Ferrari','Enzo Ferrari',true)
console.log(BMWX6,Ferrari)

class PasCar2 extends PasCar1 {
    constructor(color=null,country=null,brand=null,maker=null,products=null,price=null){
        super(color,country,brand,maker,products)
        this.price=price
    }
}
const BMWmaybach=new PasCar2('white','Italy','BMWX6','Karl Rapp','sport car','13250000',true)

console.log(BMWmaybach)