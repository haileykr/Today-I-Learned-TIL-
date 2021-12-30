const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNums = numbers.filter(n => {
    return n %2 === 0;
})

const movies = [
    {
        title: 'A',
        score: 90,
        year: 1925
    },
    {
        title: 'B',
        score: 85,
        year: 2015
    }
]

const goodMovies = movies.filter(m => m.score>=90)
console.log(goodMovies)
const goodTitles = goodMovies.map(m => m.title)
console.log(goodTitles)
const oneGo = movies.filter(m=> m.score>=90).map(m =>  m.title)
console.log(oneGo)

const indentOneGo= movies
        .filter(m => m.score >=90)
        .map(m =>m.title);


const validUserNames = (strArray) => (
    strArray.filter(x=>x.length<=10)
)