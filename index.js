const user = {
    name: 'Danel',
    age:33
}
const showtext = () => 'Hola mundo'
const shownumber = () => 23

function printinfo(user) {
    return '<h2>Hola ' + user.name + '</h2>'
}
console.log(shownumber())
console.log(showtext())
console.log(printinfo(user))
document.body.innerHTML = printinfo(user)

function printinfo_destr({ name }) {
    return '<h1>Hola ' + name + '</h1>'
}
console.log(printinfo_destr(user))
document.body.innerHTML = printinfo_destr(user)

console.log(function (){
    return 'Starting....'
}())