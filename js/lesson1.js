const root = document.getElementById('root');
const h1 = document.createElement('h1')
h1.innerText = "Hello world"
h1.id = 'heading'
h1.className = 'title_test'
h1.style = 'color: green; font-size: 100px'
console.log(h1)
document.body.appendChild(h1)