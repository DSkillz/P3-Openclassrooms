function displayAdminLogin(adminFunc) {


    document.getElementsByClassName('diapoAdd').removeAttribute("onclick");
    document.getElementsByClassName('diapoDel').removeAttribute("onclick");
    window.location.href = "login.php?action=" + adminFunc;
}

var diaporama = {
    texte: [],
    photosUrl: [],
    init: true,
    addStartIndex: 0,

    previous: function () {
        
    },
    next: function () {
        
    },
    add: function (descriptions, urls) {
        if (descriptions.length !== urls.length) {
            alert('Le nombre de descriptions ne correspond pas au nombre de photos');
        }

        this.texte = this.texte.concat(descriptions);
        this.photosUrl = this.photosUrl.concat(urls);
        console.log(this.texte);
        console.log(this.photosUrl);

        var main = document.querySelector('main');
        function fillFigure() {
            figure = document.getElementsByTagName('figure');
            var figcaption = document.createElement('figcaption');
            figure[i].appendChild(figcaption);
            document.querySelectorAll('figcaption')[i].innerHTML = diaporama.texte[i];
            var img = document.createElement('img');
            figure[i].appendChild(img);
            document.querySelectorAll('img')[i].setAttribute('src', diaporama.photosUrl[i]);
        }

        if (this.init === true) {
            for (var i = 0; i < descriptions.length; i++) {
                figure = document.createElement('figure');
                main.appendChild(figure);
                fillFigure();
            }
            this.init = false;
            this.addStartIndex += descriptions.length;
        } else {
            for (i = 0; i < descriptions.length; i++) {
                var figure = document.createElement('figure');
                main.appendChild(figure);
            }
            for (i = this.addStartIndex; i < this.addStartIndex + descriptions.length; i++) {
                console.log('addStartIndex = ' + this.addStartIndex);
                fillFigure()
            }
            this.addStartIndex += descriptions.length;
        }

/*        for (var i = 0; i < this.texte.length; i++) {
            document.getElementsByTagName('figcaption')[i].innerHTML = this.texte[i];
        }*/

    },
delete: function (indexDiapo) {

    }
};

var booking = {
    station: "",
    timestamp: 20,
    
    book: function () {
        
    },
    deleteBook: function () {
        
    },
    timeout: function () {
        
    }
};