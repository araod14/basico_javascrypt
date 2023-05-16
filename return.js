const background = 'black'
const color = 'white'
const isauthorized = true


const button = document.createElement('button')
button.innerText = 'clickme'
button.style = `background: ${isauthorized ? 'blue': background}; color: ${color}`
button.addEventListener('click', () => {
    if (isauthorized) {
       return alert('you are authorized')
    }
    alert('no esta autorizado')
    
})

document.body.append(button)