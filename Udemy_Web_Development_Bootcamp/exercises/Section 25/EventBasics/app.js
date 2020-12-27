const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

const yell = function(){
    console.log("yeahhhhhh")
}

btn.onmouseenter = yell;

document.querySelector('h1').onclick = ()  => {
    alert('you clicked the h1');
}

//NOTE. that you cannot do
//document.querySelector('h1').onclick = alert('you clicked the h1');
//because this way, the function is executed right way
//rather, you have to save the function reference in the property!

const btn3 = document.querySelector('#v3');

btn3.addEventListener('dblclick',function(){
    alert('DOUBLE CLICKED!');
})




function yes(){
    console.log('yeaaaaaas');
}

const yayButton = document.querySelector('#yay');

yayButton.onclick = yes;
yayButton.onclick = yell; //overwrites

yayButton.addEventListener('click',yes, {once:true})
yayButton.addEventListener('click',yell)
