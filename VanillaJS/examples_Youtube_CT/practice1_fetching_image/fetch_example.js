// fetch('./seoul2.jpeg').then(response => {
//     console.log(response);
//     return response.blob();
// }).then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// }).catch(error=>{
//     console.error(error);
// })

async function catchRainbow(){
    const response = await fetch('./seoul2.jpeg');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}

catchRainbow()
.then(response =>  console.log(`yay`))
.catch(error => console.log(error));


// Fetching a poem
async function catchPoem(){
    const response = await fetch('./poem.txt');
    return await response.text();
}

catchPoem()
    .then(poem => {
        document.getElementById('poem').innerText = poem;
        console.log(`yay`);
    })
    .catch(error =>{
        console.log(error);
    });


// Fetching an array of images
const filenames = [
    './seoul2.jpeg',
    './cattwo.jpeg',
];

catchImages(filenames)
    .then(response =>{
        console.log(`yay`);
    })
    .catch(error=>{
        console.log(error);
    });

async function catchImages(filenames){
    for (let filename of filenames){
        const response = await fetch(filename);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob)
        img.width = '200';
        document.getElementById("array").append(img);
    }
}