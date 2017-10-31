'use strict';

class diaporama {
    constructor(id, currentImg, timeOut) {
        this.id = id; //id de la balise où insérer la diapo
        this.text = []; //texte de la diapo
        this.imgsUrl = []; //url des diapos
        this.currentDiapoIndex = currentImg; //image affichée
        this.timeOut = timeOut; //délai entre l'affichage de deux diapos
    }

    init(text, imgsUrl) { //affichage diapo (initialisation)
        this.text = text; //tableau des textes des différentes diapos
        this.imgsUrl = imgsUrl; //tableau des urls des images de diapos
        this.displayDiapo();
    }

    displayDiapo() {
        let src = this.imgsUrl[this.currentDiapoIndex];
        let text = this.text[this.currentDiapoIndex];
        $('#' + this.id + ' img').attr('src', src); //on insère l'image de diapo
        document.querySelector('#' + this.id + ' figcaption').textContent = text
    }

    changeDiapo() { //mise à jour diapo
        if (this.currentDiapoIndex < this.text.length - 1) { //si index de l'image diapo en cours n'est pas supérieure à nombre de diapos ( -1 !!)
            this.currentDiapoIndex += 1;
        } else {
            this.currentDiapoIndex = 0;
        }
        this.displayDiapo();
    }

    previous() { //diapo précédente
        if (this.currentDiapoIndex > 0) {
            this.currentDiapoIndex -= 1;
        } else {
            this.currentDiapoIndex = this.text.length - 1;
        }
        this.displayDiapo();
    }

    next() { //diapo suivante
        if (this.currentDiapoIndex < this.text.length - 1) {
            this.currentDiapoIndex += 1;
        } else {
            this.currentDiapoIndex = 0;
        }
        this.displayDiapo();
    }

    add(descriptions, urls) { //ajout diapo
        this.text = this.text.concat(descriptions);
        this.imgsUrl = this.imgsUrl.concat(urls);
        console.log(this.text, this.imgsUrl);
    }

    del(listDiapo) {
        listDiapo.forEach(function (index) {
            this.text.splice(index, 1);
            this.imgsUrl.splice(index, 1);
        }.bind(this))
    }

}

class booking {
    constructor(station, timeLeft) {
        this.station = station;
        this.timeLeft = timeLeft;
    }

    reserve() {

    }

    delBook() {

    }
}

const Diapo = new diaporama('diaporama', 0, 2000);

Diapo.init(['Paris à vélo, c\'est sympa !',
        'Réservez ici votre bicyclette.',
        'pouet'],

    ['https://parisvelosympa.fr/file/2017/01/Vélo-assistance-elect-E-colors-553x415.jpg',
        'https://parisvelosympa.fr/file/2016/11/VAE-O2Feel-min.jpg',
        'http://www.philauvergne.fr/wp-content/uploads/2013/04/c_velo_clermont_smtc.jpg']);

setInterval(Diapo.changeDiapo.bind(Diapo), Diapo.timeOut); //setInterval(function(){Diapo.changeDiapo();}, Diapo.timeOut); possible

$(document).keypress(function (touche) { //quand user appuie sur touche du clavier

    let appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
    if (appui == 37) { // si le code de la touche est égal à 17 (Gauche)
        Diapo.previous();
    }
    if (appui == 39) { // si le code de la touche est égal à 39 (Droite)
        Diapo.next();

    }
});

$('#prev').click(function () {
    Diapo.previous();
});

$('#next').click(function () {
    Diapo.next();
});

const Book = new booking();

// Global vars
let jsonData = ''; // données complètes du json
let markerData = []; // données des marker Google map
let stations = []; // noms des stations
let latLng = []; // tableau de {latitude, longitude}
const Paris = {lat: 48.8534, lng: 2.3488};

function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: Paris
    });

    fetch('https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=3c4b2118ed57c571940545ec0cdf4c5b7d8e0d3d').then(function (response) {
        // Convert to JSON
        return response.json();
    }).then(function (data) {
        // Yay, `j` is a JavaScript object
        jsonData = data;
        $.each(data, function (key, val) {
            stations.push(val.name);
            latLng.push(val.position);
        });

        // These are the real estate listings that will be shown to the user.
        // Normally we'd have these in a database instead.
        /*    var markerData = [
                {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
                {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
                {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
                {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
                {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
                {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
            ];*/

        const markers = latLng.map(function (location, i) {
            return new google.maps.Marker({
                position: location
            });
        });

        /*            const largeInfowindow = new google.maps.InfoWindow();
                    const bounds = new google.maps.LatLngBounds();
                    // The following group uses the location array to create an array of markers on initialize.
                    for (let i = 0; i < markerData.length; i++) {
                        // Get the position from the location array.
                        let position = markerData[i].location;
                        let title = markerData[i].title;
                        // Create a marker per location, and put into markers array.
                        const marker = new google.maps.Marker({
                            map: map,
                            position: position,
                            title: title,
                            animation: google.maps.Animation.DROP,
                            id: i
                        });
                        // Push the marker to our array of markers.
                        markers.push(marker);
                        // Create an onclick event to open an infowindow at each marker.
                        marker.addListener('click', function () {
                            populateInfoWindow(this, largeInfowindow);
                        });
                        bounds.extend(markers[i].position);
                    }
                    // Extend the boundaries of the map for each marker
                    map.fitBounds(bounds);

                    // This function populates the infowindow when the marker is clicked. We'll only allow
                    // one infowindow which will open at the marker that is clicked, and populate based
                    // on that markers position.
                    function populateInfoWindow(marker, infowindow) {
                        // Check to make sure the infowindow is not already opened on this marker.
                        if (infowindow.marker != marker) {
                            infowindow.marker = marker;
                            infowindow.setContent('<div>' + marker.title + '</div>');
                            infowindow.open(map, marker);
                            // Make sure the marker property is cleared if the infowindow is closed.
                            infowindow.addListener('closeclick', function () {
                                infowindow.setMarker = null;
                            });
                        }
                    }*/

        // Add a marker clusterer to manage the markers.
        const markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    }).catch(function (error) {
        // If there is any error you will catch them here
        let err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
    });

};

