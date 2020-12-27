const sampleObject = {
    a: 1,
    b: 2,
    c: 3
}

for (let key in sampleObject){
    console.log(`${key}: ${sampleObject[key]}`);
}