console.log('hello!')

const social = document.querySelector('#social')
console.log(social)

const h2 = document.querySelector('h2')
console.log(h2)

h2.innerText = 'Welcome to Houston, Texas!!!'

const container = document.querySelectorAll('.container')
console.log(container)

const lists = document.querySelectorAll('li')
console.log(lists)
lists[3].style.color = '#3399ff' // changes the 3rd index of lists which is the 4th down the list

lists[5].innerText = 'Jamboree sandwich at the Jamboree'

const newpic = document.createElement('img')

newpic.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Minutemaidpark.jpg')
newpic.style.width = '100%'

document.querySelector('.container').appendChild(newpic)