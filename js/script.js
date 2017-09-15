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
            alert('Vous avez mis soit une description, soit une photo');
        }

        var selectedTag = document.querySelector('main')
        for (var i = 0; i <= descriptions.length; i++) {
            var tag1 = document.createElement('figure');
            var tag2 = document.createElement('figcaption');
            selectedTag.appendChild(tag1);
            selectedTag.appendChild(tag2);
        }
        this.texte.push(descriptions);
        this.photosUrl.push(urls)
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