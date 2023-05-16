console.log('Hola mundo')

function hola(name){
    return 'hola ' + name
}
console.log(hola('daniel'))

function add(x=3, y=0) {
    add = x + y
    return 'suma: ' + add
}
console.log(add())

const user = {
    name:'danel',
    lastname: 'perez',
    age: '30',
    friends: ['bradn','santi'],
    addres: {
        country: 'ven',
        city: 'bna'
    },
    sendmail: function(){
        return 'sendingmail'
    }
} 
console.log(user.addres.country)

const name = 'laptop'
const price = 3000

const newproduct = {
    name: name,
    price: price
}
console.log(newproduct)