const person = {
    name: 'Alice',
    age: 22
}

const person2 = { ...person }
person2.name = 'Charlie'

console.log(person2.name)
console.log(person.name)
