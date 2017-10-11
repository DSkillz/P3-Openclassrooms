// remove element from array
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) != -1) {
            this.splice(ax, 1);
        }
    }
    return this;
}

String.prototype.deobfuscate = function () {
    var arr = this.split('$');
    return arr.map(function(c) {
        return String.fromCharCode(parseInt(c, 16))
    }).reduce(function(a, b) {return a  + b})
}

function doStuff(val){ /* fonction de récupération du mdp */
    /*var xhr = new XMLHttpRequest();
    xhr.open('POST', 'misc/misc.txt');
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText === val);
        } else if (xhr.status === 404) {
            console.log('failed');
        }
    });
    xhr.send(null);*/
    $.ajax({
        url: 'misc/misc.txt',
        type: 'POST',
        datatype: 'text',
        success: function (response) {
            console.log(val, response.deobfuscate());
            if (typeof val === 'string') {
                if (val === response.deobfuscate()) {
                    console.log('true');
                    InputBox.render();
                } else {
                    Alert.render('Mot de passe incorrect !');
                }
            } else if (Array.isArray(val)){

            }
        }
    });
};

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
