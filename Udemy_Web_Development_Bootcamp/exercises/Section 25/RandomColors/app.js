

const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const btn = document.querySelector('button');

const color = () => {
    const red = Math.floor(Math.random()*255)+1;
    const green = Math.floor(Math.random()*255)+1;
    const blue = Math.floor(Math.random()*255)+1;


    h1.innerText = `rgb (${red},${green},${blue})`;
    body.style.backgroundColor = `rgb(${red},${green},${blue})` 

    if ((red+green+blue) <= 200){
        h1.style.color = 'white'
    }
    else{
        h1.style.color = 'black'
    }
    
}
btn.addEventListener('click',color );

// Colt's Codes
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');
// button.addEventListener('click',function() {
//     const newColor = randomColor()
//     document.body.style.backgroundColor = newColor;
//     h1.textContent = newColor ;
// })

// const randomColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }