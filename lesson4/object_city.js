const myCity = {
    city: 'Las Vegas'
}

myCity['popular'] = true
console.table(myCity)

const propertyCountryName = 'country'
myCity[propertyCountryName] = 'USA'
console.table(myCity)