const myObject = {
    name: 'Sovetbek',
    age: '33',
    country: 'Kyrgyzstan',
    married: true
}

console.table(myObject)

myObject.phoneNumber = +996500019620

console.table(myObject)

myObject.name = 'Sovetbek Akmatkulov'

console.table(myObject)

const copyObject = myObject
copyObject.name = 'Aigerim Akhmatova'

console.table(copyObject)