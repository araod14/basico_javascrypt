import {add} from './add.js'

const names = ['Santi', 'Arao', 'Rodriguez']
const lastnames = ['perez','vivas','jhon']

for (let i=0; i<names.length; i++){
    const element = names[i];
    console.log(element)
}

names.forEach(function(name){
    console.log(name)
})

const newNames = names.map(function(name){
    return `Hola ${name}`
})

const namefound = names.find(function(name){
    if (name === 'Santi'){
        return name
    }
})
const namefiltered = names.filter(function(name){
    if (name !== 'Santi'){
        return name
    }
})
allnews = names.concat(lastnames)
console.log(names)
console.log(newNames)
console.log(namefound)
console.log(namefiltered)
console.log(allnews)
console.log(add(21,34))