console.log("FOR loop");
const seatingChart = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i']
]

for (let i=0;i<seatingChart.length;i++) {
    for (let j=0;j<seatingChart[i].length;j++){
        console.log(seatingChart[i][j]);
    }
}

console.log("WHILE loop");

let count=0;
while (count <10){
    console.log(count);
    count++;
}
