async function getISS(){
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

    const response = await fetch(api_url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const {latitude, longitude } = data;
    console.log(latitude, longitude);

    document.getElementById('lat').innerText = latitude.toFixed(2);
    document.getElementById('lon').innerText= longitude.toFixed(2);
}
getISS();

setInterval(getISS , 1000);

