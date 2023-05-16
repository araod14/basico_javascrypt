async function Loaddata(){
    const response = await fetch('https://jsonplaceholder.typicode.com/')
    const data = await response.json()
    console.log(data)
}

Loaddata()
console.log('line 2')