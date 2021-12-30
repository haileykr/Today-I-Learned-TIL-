// TV Show SearchApp!
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    clearimages()
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}, header: {} }
    //const res = await axios.get('http://api.tvmaze.com/search/shows?q='+searchTerm)
    const res = await axios.get( 'http://api.tvmaze.com/search/shows',config)
    
    makeimages(res.data)
    form.elements.query.value=''
})

const makeimages = (shows) =>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG')
            img.src =  result.show.image.medium;
            document.body.append(img)
        }
    }
}

const clearimages = ()=>{
    const allimages = document.body.querySelectorAll('img')
    for(let each of allimages) {
        each.remove()
    }
}