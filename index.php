<!DOCTYPE html>
<html lang="fr">
<head>
    <title>BB | BicycleBooking</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">

    <!--<script src="https://unpkg.com/vue/dist/vue.min.js"></script>-->
    <!--<script src="https://use.fontawesome.com/029b10a003.js"></script>-->
</head>
<body>
<main>
    <section id="input">
        <figure id="diaporama">
            <img src="" alt="diaporama">
            <figcaption></figcaption>
            <button id="prev"><i class="fa fa-arrow-circle-left aria-hidden="true"></i></button>
            <button id="next"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
        </figure>
        <div id="map"></div>
    </section>
    <section id="infos">
        <div id="bookInsert">
            <ul>
                <li><b id="stationName">Sélectionnez une station</b></li>
                <br>
                <li>Adresse: <b id="address"> - </b></li>
                <li>Status: <b id="status"> - </b></li>
                <li>Places totales: <b id="total"> - </b></li>
                <li>Places disponibles: <b id="availableStands"> - </b></li>
                <li>Vélos disponibles: <b id="availableBikes"> - </b></li>
            </ul>
            <div id="outerButtons">
                <div class="innerButtons"><button id="clearCanvas" class="hidden">Effacer</button></div>
                <div class="innerButtons"><button id="bookButton">Réserver</button></div>
            </div>
            <input type="text" oninput="view()" placeholder="ara" id="ara">
            <br>
            <div id="alan"></div>
        </div><!-- Insert = encart -->
        <div id="directive" class="hidden">Veuillez signer svp puis cliquez à nouveau sur le bouton 'Réserver'.</div>
        <div id="bookState">Test</div>
    </section>
    <canvas id="signature" class="hidden" width="350px" height="235px"></canvas>
</main>
<script
        src="https://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"></script>
<script src="js/diaporama.js"></script>
<script src="js/book.js"></script>
<script src="js/search.js"></script>
<script src="js/markerclusterer.js"></script>
<script src="js/map.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnGoKkhN_gZtFsOa_Z8FRq35Tab9bIm3g&callback=initMap">
</script>
</body>
</html>

<!--<video autoplay loop poster="http://lespetitsdebrouillards-aura.org/wp-content/uploads/2017/10/ezgif.com-video-to-gif.png" id="bgvid">
    <source src="http://lespetitsdebrouillards-aura.org/wp-content/uploads/2017/10/taupe-pour-animation_1.webm" type="video/webm">
    <source src="http://lespetitsdebrouillards-aura.org/wp-content/uploads/2017/06/taupe-pour-animation_1.mp4" type="video/mp4">
</video>


video#bgvid {
position: fixed; right: 0; bottom: 0;
min-width: 100%; min-height: 100%;
width: auto; height: auto; z-index: -100;
background: url(http://lespetitsdebrouillards-aura.org/wp-content/uploads/2017/10/ezgif.com-video-to-gif.png) no-repeat;
background-size: cover;
}-->