const car = {
    engine: 'diesel',
    data: 22012026
}

const car2 = Object.assign({}, car)
car2.engine = 'hybrid'
car2.vinCode = 11223344
console.log(car.engine)
console.log(car2.engine)
console.log(car2.vinCode)