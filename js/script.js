var diaporama = {
    texte: [],
    photosUrl: [],
    active: 1,
    init: true,
    addStartIndex: 0,

    previous: function () {
        
    },
    next: function () {
        
    },
    add: function (descriptions, urls) {
        if (descriptions.length != urls.length) {
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
            var img = document.createElement('img');
            figure[i].appendChild(img);
        }

        if (this.init == true) {
            for (var i = 0; i < descriptions.length; i++) {
                var figure = document.createElement('figure');
                main.appendChild(figure);
                fillFigure();
            }
            this.init = false;
            this.addStartIndex += descriptions.length;
        } else {
            for (var i = 0; i < descriptions.length; i++) {
                var figure = document.createElement('figure');
                main.appendChild(figure);
            }
            for (var i = this.addStartIndex; i < this.addStartIndex + descriptions.length; i++) {
                console.log('addStartIndex = ' + this.addStartIndex);
                console.log('i = ' + i);
                fillFigure()
            }
            this.addStartIndex += descriptions.length;
        }

        // jusqu'ici tout fonctionne

/*        for (var i = this.texte.length; i < this.texte.length + descriptions.length; i++) {
            console.log(i);
        }*/

/*        var figure = document.querySelectorAll('figure');
        console.log('figure.length: ' + figure.length);
        for (var i = this.texte.length; i < this.texte.length + descriptions.length; i++) {
            console.log('i ()= ' +i);

            g = figure[i];
            console.log('figure[i]= ' +g);

            var tag2 = document.createElement('img');
            a.appendChild(tag2);
            var img = document.querySelectorAll('img');
            img[i].setAttribute('src', this.photosUrl[i]);
            var tag3 = document.createElement('figcaption');
            a.appendChild(tag3);
        }*/

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