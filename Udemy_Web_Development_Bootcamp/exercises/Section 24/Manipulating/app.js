const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

document.querySelector('h1').innerHTML  += '<sup> cute!!</sup>';


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
    link.style.fontFamily = "arial"
}


const firstLink = document.querySelector('a');
firstLink.innerText = "Hehe Changed to Google!";

firstLink.setAttribute ('href','https://www.google.com')

const h1 = document.querySelector('h1')

console.log(h1.style.color)
h1.style.fontSize = '3em';

h1.classList.add('purple')

h1.classList.add('border')

h1.classList.remove('border')

//h1.classList.toggle('purple')

//createElement() and appendChild()
const newImg = document.createElement('img')
newImg.src = 'https://images.unsplash.com/photo-1600348650950-938802b5a5e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
document.body.appendChild(newImg);

newImg.classList.add('square')

//another way - append()
const theParagr = document.querySelector('p')
theParagr.append('i am new text yayyy')

const newB = document.createElement('b')
newB.append('INTERCEPT')
//<b>INTERCEPT</b>
theParagr.prepend(newB)


//insertAdjacentElement()
const h2 = document.createElement('h2')
h2.append("Are adorable chickens" );
h1.insertAdjacentElement('afterend',h2)

//after()
const h3 = document.createElement('h3')
h3.innerText = "very very"
h1.after(h3)


//remove
const firstLi = document.querySelector('li')
firstLi.parentElement.removeChild(firstLi)

const secondLi = document.querySelector('li')
secondLi.remove()
