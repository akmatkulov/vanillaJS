const profile = {
    name: 'Alex',
    info: {
        phoneNumber: 221133
    }
}

const profile2 = JSON.parse(JSON.stringify(profile))
profile2.name = 'Ben'
profile2.info.phoneNumber = 113355

console.log(profile2.name)
console.log(profile2.info.phoneNumber)
console.log(profile.name)
console.log(profile.info.phoneNumber)
