var diaporama = {
    texte: [],
    photosUrl: [],
    active: 1,
    
    previous: function () {
        
    },
    next: function () {
        
    },
    add: function (descriptions, urls) {
        if (descriptions.length != urls.length) {
            alert('Le nombre de descriptions ne correspond pas au nombre de photos');
        }

        var main = document.querySelector('main')
        main.innerHTML = '';
        for (var i = 0; i < descriptions.length; i++) {
            var tag1 = document.createElement('figure');
            main.appendChild(tag1);
        }
        var figure = document.querySelectorAll('figure');
        for (var i = 0; i < descriptions.length; i++) {
            a = figure[i];
            var tag2 = document.createElement('img');
            a.appendChild(tag2);
            var img = document.querySelectorAll('img');
            img[i].setAttribute('src', urls[i]);
            var tag3 = document.createElement('figcaption');
            a.appendChild(tag3);
        }
        this.texte.push(descriptions);
        this.photosUrl.push(urls);
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