class Vehicle {
    move() {
        console.log('O veiculo esta se movendo')
    }
}

class Car extends Vehicle {
    move() {
        console.log('o carro esta se movendo')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('o navio esta se movendo')
    }
}

class Airclaft extends Vehicle {
    move(speed) {
        console.log(`a aeronave esta voando a ${speed} km/h`)
    }
}

const vectra = new Car()
const blackPearl = new Ship()
const epoch = new Airclaft()

//vectra.move()
//blackPearl.move()
//epoch.move(500)

function start(vehicle) {
    console.log('iniciando um veículo...')
    vehicle.move()
}

start(vectra)
start(blackPearl)
start(epoch)