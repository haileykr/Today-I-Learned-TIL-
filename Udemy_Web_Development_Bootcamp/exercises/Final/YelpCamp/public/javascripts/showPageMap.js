//TO MAKE THE MAP APPEAR U MUST
//ADD YOUR ACCESS TOKEN FROM
//https://account.mapbox.com
mapboxgl.accessToken = mapToken
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', //stylesheet location
    center:campground.geometry.coordinates, //starting position [lng,lat]
    zoom: 9 //starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25})
            .setHTML(
                `<h3>${campground.title}</h3>  <p>${campground.location}</p>`
            )
    )
    .addTo(map)