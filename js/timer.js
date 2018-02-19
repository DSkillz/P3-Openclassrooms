var myTimer = {
    minutes: null,
    seconds: null,
    duration: null,
    myTime: null,

    init: function(duration) {
        this.duration = duration;
        this.startTimer();
        this.StockInfo();
        this.stopTimer();
    },

    StockInfo: function() {

        if (sessionStorage.getItem("bookedStation") != null) {
            var retrievedbookedStation = JSON.parse(sessionStorage.getItem('bookedStation'));
            $('#final').text("Vous avez réservé un vélo à la station " + retrievedbookedStation.name);
            var dateNow = sessionStorage.getItem('bookDate');
            var timePassed = Math.abs(dateNow - Date.now());
            var secondesPassed = Math.floor(timePassed / 1000);
            myTimer.init(1200 - secondesPassed);

        }
    },

    startTimer: function() {
        var timer = this.duration;
        this.timeOut();
        this.myTime = setInterval(function() {
            this.minutes = parseInt(timer / 60, 10);
            this.seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            $('#min').text(minutes);
            $('#sec').text(seconds);

            if (--timer < 0) {
                timer = clearInterval(this.myTime);
                $("#cancelBook").text("Réservation expirée");
                $("#timerBlock").hide();
                $("#text_final").hide();
                $("#text_final2").hide();
            }
        }, 1000);
    },

    timeOut: function() {
        clearInterval(this.myTime);
    },

    stopTimer: function(){
        $("#cancelBook").click(function(){
            $("#timerBlock").hide();
            $("#text_final").hide();
            $("#text_final2").hide();
            $("#cancelBook").text("réservation annulée. Raffaichissez la page pour effectuer une nouvelle réservation");

        });
    }
}

$(function(){
    myTimer.init()
})

