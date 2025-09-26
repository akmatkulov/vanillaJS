const myCity = {
    city: 'Portland'
}

console.log(myCity)

myCity.country = 'USA'

console.log(myCity)

myCity.people = 1200000
delete myCity.country
console.log(myCity)