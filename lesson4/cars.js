const myCars = {
    brand: 'Toyota',
    made: 'Japan',
    info: {
        engine: '2UZ-FE',
        vincode: '2AW1312DSD2332'
    }
}

console.log(myCars)

delete myCars.info.engine

console.log(myCars)