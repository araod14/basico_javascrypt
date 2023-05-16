const title = document.createElement('h2')
title.innerText = 'Hola mundo desde js'
 
const button = document.createElement('button')
button.innerText = 'click here'
button.addEventListener('click', function(){
    title.innerText = 'Updated text bitch'
    alert('had be clicked')
})

document.body.append(title)
document.body.append(button)