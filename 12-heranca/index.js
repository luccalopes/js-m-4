class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property {

}

class Apartment extends Property {
    constructor(number, area, price) {
        //this.area = area
        super(area, price)
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const land = new Property(200, 500000)
const someHouse = new House(120, 200000)
const someApartment = new Apartment('2101', 58, 250000)

console.log(land)
console.log(someHouse)
console.log(someApartment)
console.log(someApartment.getFloor())