const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

//sum of prices
let total1 = 0;
for (let price of prices){
    total1 += price
}
console.log(total1)

//another way
const total2 = prices.reduce((total, element) => {
    return total + element
})
console.log(total2)

//with initial value of 100
const total3 = prices.reduce((total,element) => total+element, 100)


console.log(total3)

//maximum value
const minimum = prices.reduce((min, price) => {
    if (price < min){
        return price;
    }
    return min;
}) 
console.log(minimum); 

const movies = [
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Marvel Heroes',
        score: 100,
        year: 2018
    }
]

const bestMovie = movies.reduce((bestMovie,currMovie) => {
    if (bestMovie.score > currMovie.score){
        return bestMovie.title;
    }
    return currMovie.title;
})

console.log(bestMovie);