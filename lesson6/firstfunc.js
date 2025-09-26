const myCar = {
    engine: 'diesel',
    model: '2UZ-FE'
}

function newCar(obj, value) {
    const updateCar = Object.assign({}, obj)
    updateCar.engine = value
    return updateCar
}

const myCar2 = newCar(myCar, 'hybrid')
console.table(myCar2)
console.table(myCar)