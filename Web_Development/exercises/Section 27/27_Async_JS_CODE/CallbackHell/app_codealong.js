// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';

//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange';
//     },1000)
// },1000)

// make it more generic
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        // check if doNext exists
        doNext && doNext();
    }, delay)
}

//Callback Hell
delayedColorChange('red', 2000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                })
            })
        })
    })
});