class diaporama {
    constructor(){
        this.id = '';
        this.texte = [];
        this.photoUrl = [];
        this.currentImg = 1;
    }

    init() {

    }

    previous() {

    }

    next() {

    }

    add(descriptions, urls) {

    }
}


(function () { // fonction anonyme englobante

    descriptions = ['text1', 'text2', 'text3'];
    urls = ['url1', 'url2', 'url3'];

    diaporama = {
        id: '',
        texte: [],
        photosUrl: [],
        arrayInit: true,
        addStartIndex: 0,
        
        init: function () {
            
        },
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

            if (this.arrayInit === true) {
                for (var i = 0; i < descriptions.length; i++) {
                    figure = document.createElement('figure');
                    main.appendChild(figure);
                    fillFigure();
                }

                this.arrayInit = false;
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
        del: function (indexDiapo) {

        }
    };

    booking = {
        station: "",
        timestamp: 20,

        book: function () {

        },
        deleteBook: function () {

        },
        timeout: function () {

        }
    };
})(); // fin de la fonction anonyme englobante
