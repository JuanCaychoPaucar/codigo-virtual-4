

const btnMarkerArequipa = document.getElementById("btnMarkerArequipa");
const btnMarkerArequipaEliminar = document.getElementById("btnMarkerArequipaEliminar");
const btnPolylineArequipa = document.getElementById("btnPolylineArequipa");
const btnEnfocarPuno = document.getElementById("btnEnfocarPuno");

let markerArequipa;

// https://leafletjs.com/examples/quick-start/
/**
 * setView([latitud, longitud], zoom)
 */
let mymap = L.map('mapid').setView([-16.409046, -71.537453], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVhbmNheWNob3BhdWNhciIsImEiOiJja2cxb2x6NzQwMHRvMnNwb2JhemljOGN6In0.QPiQRU4N9yznu37Y125Qfw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianVhbmNheWNob3BhdWNhciIsImEiOiJja2cxb2x6NzQwMHRvMnNwb2JhemljOGN6In0.QPiQRU4N9yznu37Y125Qfw'
}).addTo(mymap);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);

// navigator.geolocation.getCurrentPosition  INVESTIGAR

// metodo clic en el mapa
mymap.on("click", (e) => {
    const marcador = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);

    // contextmenu, es el evento del click derecho o anticlick
    marcador.on("contextmenu", () => {
        mymap.removeLayer(marcador);
    });
});

btnMarkerArequipa.onclick = () => {
    // crear un icono para colocarlo en el marcador
    let iconoDelivery = L.icon({
        iconUrl: "./img/delivery.svg",
        iconSize: [30, 30],
    });

    // colocar un marcador situado en Arequipa y le mandamos el icono personalizado
    markerArequipa = L.marker([-16.409046, -71.537453], { icon: iconoDelivery }).addTo(mymap);
}

btnMarkerArequipaEliminar.onclick = () => {
    // eliminar un marcador del mapa teniendo su referencia
    mymap.removeLayer(markerArequipa);
}

btnPolylineArequipa.onclick = () => {
    // dibujar una ruta en Arequipa
    let rutaArequipa = [
        [-16.41614133217009, -71.53874158859254],
        [-16.415873753803165, -71.53822660446168],
        [-16.41638832725895, -71.5379047393799],
        [-16.417005813608597, -71.53756141662599],
        [-16.41673823643115, -71.53664946556093],
        [-16.416172206573364, -71.53576970100404],
        [-16.416676487799453, -71.5354371070862],
        [-16.417077853555007, -71.53515815734865],
        [-16.417736503256116, -71.53476119041444],
        [-16.418312819914494, -71.53560876846315],
        [-16.420144672234677, -71.53814077377321],
    ];


    let polylineArequipa = L.polyline(rutaArequipa, { color: "#ff0000" }).addTo(mymap);

    // redirigir la vista al polyline
    // FORMA 1
    // mymap.fitBounds(rutaArequipa);

    // FORMA 2
    // duration en segundos
    mymap.fitBounds(polylineArequipa.getBounds(), { animate: true, duration: 3 });
};

btnEnfocarPuno.onclick = () => {
    // mover la camara a Puno
    /**
     * fitBounds, recibe un arreglo de LatLng, es decir un arreglo
     * de coordenadas, que en conjunto, queremos visualizar en el area del mapa.
     * esto quiere decir, que si mandamos mas de una coordenada, el area de visualizacion
     * del mapa va a contener todas esas coordenadas
     */
    mymap.fitBounds([[-15.840222, -70.021881]]);
}