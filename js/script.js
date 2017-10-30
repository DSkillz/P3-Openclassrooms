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
        var src = this.imgsUrl[this.currentDiapoIndex];
        var text = this.text[this.currentDiapoIndex];
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

    var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
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

var locations = [];

function initMap() {
    var Paris = {lat: 48.8534, lng: 2.3488};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: Paris
    });

    var coord = {
        lat: 0,
        lng: 0
    }

    $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=3c4b2118ed57c571940545ec0cdf4c5b7d8e0d3d")
        .done(function( data ) {
            $.each(data, function (key, val) {
                coord = val.position;
                locations.push(coord);
            });

            var markers = locations.map(function (location, i) {
                return new google.maps.Marker({
                    position: location
                });
            });

            // Add a marker clusterer to manage the markers.
            var markerCluster = new MarkerClusterer(map, markers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });

};