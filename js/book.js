class booking {
    constructor(stationName, timeLeft) {
        this.stationName = stationName;
        this.timeOut = timeOut;
    }

    sign() {

    }

    reserve() {
        if (typeof station === 'undefined') {
            alert('Sélectionnez d\'abord une station pour pouvoir réserver');
        } else {
            this.stationName = station.name;
            console.log(station.name);
        }
    }

    delBook() {
    }
}

const Book = new booking('', 2000);