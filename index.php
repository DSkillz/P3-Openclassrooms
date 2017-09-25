<!DOCTYPE html>
<html lang="fr">
<head>
    <title>BB | BicycleBooking</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans"/>
    <link rel="stylesheet" href="css/dialog.css">

    <script
            src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
            crossorigin="anonymous"></script>
    <script src="js/dialog.js"></script>
    <script src="js/script.js"></script>
    <!--<script src="https://unpkg.com/vue/dist/vue.min.js"></script>-->
    <!--<script src="https://use.fontawesome.com/029b10a003.js"></script>-->
</head>
<body>
<main>

</main>
<footer>
    <button class="addButton" onclick="Prompt.render('Entrer le mot de passe admin:','doStuff');"><i class='fa fa-key' aria-hidden='true'></i>&nbsp;&nbsp;Ajouter
        diapo
    </button>
    <button class="delButton" onclick="Prompt.render('Entrer le mot de passe admin:','doStuff');"><i class='fa fa-key' aria-hidden='true'></i>&nbsp;&nbsp;Supprimer
        diapo
    </button>
    <div id="dialogoverlay"></div>
    <div id="dialogbox">
        <div>
            <div id="dialogboxhead"></div>
            <div id="dialogboxbody"></div>
            <div id="dialogboxfoot"></div>
        </div>
    </div>
</footer>
<script>
/*    window['onload'] = function () {



    };*/
    /*    var example1 = new Vue({
            el: '#example-1',
            data: {
                counter: 0
            }
        })*/
</script>
</body>
</html>