'use strict';
var station; // on crée un objet station qu'on initialise en 'undefined'
var markers = [];
function initMap() {
    var Paris = {lat: 48.8534, lng: 2.3488};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: Paris
    });

    $.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=3c4b2118ed57c571940545ec0cdf4c5b7d8e0d3d')
        .done(function (globalData) {
            $.each(globalData, function (key, val) {
                var marker = new google.maps.Marker({
                    position: val.position
                });
                marker.addListener('click', function () {
                    // récupère le JSON de la station et l'affiche
                    $.getJSON('https://api.jcdecaux.com/vls/v1/stations/' + val.number + '?contract=Paris&apiKey=3c4b2118ed57c571940545ec0cdf4c5b7d8e0d3d')
                        .done(function (stationData) {
                            //afficher data dans encart
                            station = stationData; // on stocke stationData dans l'obj global 'station' qui sera utilisé plus tard dans l'obj booking lors de l'appel méthode reserve()
                            document.getElementById('stationName').innerText = 'Station: ' + station.name;
                            document.getElementById('address').innerText = station.address;
                            var text = '';
                            if (station.status === 'OPEN') {
                                text = 'Ouverte';
                                displayInfo()
                                $('#bookButton').css('display', 'flex');
                            } else if (station.status === 'CLOSED') {
                                text = 'Fermée';
                                displayInfo()
                                $('#bookButton').css('display', 'none');
                                alert('Station Fermée');
                            } else {
                                text = 'En travaux';
                                displayInfo()
                                //$('#bookButton').css('display', 'none');
                                alert('Station en Travaux');
                            }
                            function displayInfo() {
                                document.getElementById('status').innerText = text;
                                document.getElementById('total').innerText = stationData.bike_stands;
                                document.getElementById('availableStands').innerText = stationData.available_bike_stands;
                                document.getElementById('availableBikes').innerText = stationData.available_bikes
                            }
                        })
                })
                markers.push(marker);
            });

            // Add a marker clusterer to manage the markers.
            var markerCluster = new MarkerClusterer(map, markers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });

};