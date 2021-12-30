const fs = require('fs');
const folderName  = process.argv[2] || 'Project'

// // fs.mkdir('~/Documents/Github/til/Udemy_Web_Development_Bootcamp' {recursive: true}, (err) =>{
// //     console.log("IN THE CALLBACK!")
// //     if (err) throw err;
// // })

fs.mkdirSync(folderName);




try {
    fs.writeFileSync(`${folderName}/index.html`,'');
    fs.writeFileSync(`${folderName}/app.css`,'');
    fs.writeFileSync(`${folderName}/app.js`,'');

}catch (e) {
    console.log("error!"
    console.log(e)

}