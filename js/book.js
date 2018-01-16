'use strict';
var canvas = $('#signature');
var baseCanvas = $('#signature')[0].toDataURL();
class booking {
    constructor(timeOut) {
        this.stationToBook;
        this.timeOut = timeOut;
        this.bookConfirm = true;
    }

    sign() {
        console.log('sign');
        this.stationToBook = station;
        if (typeof station === 'undefined') {
            alert('Sélectionnez d\'abord une station pour pouvoir réserver');
        } else {
            console.log(this.stationToBook.name);
            /// On fixe l'affichage sur mobile
            const mq = window.matchMedia('(max-width: 900px)');
            if (mq.matches) {
                //less than 900px
                $('html, body').css('overflow', 'hidden');
                $('body').css('position', 'relative');
            } else {
                //more than 900p
                // $('html, body').css('overflow', 'auto');
                // $('body').css('position', 'static');
            }
            $('#signature, #directive, #clearCanvas').removeClass('hidden'); // affiche le canvas
            var color = "#000";
            var painting = false;
            var started = false;
            var width_brush = 2;
            var cursorX, cursorY;

            var context = canvas[0].getContext('2d');

            // canvas.toDataURL() == blank.toDataURL();

            if (this.bookConfirm == true) {clear_canvas()}; // efface le canvas si ce n'est fait (réinitialise après sauvegarde de la réserversation, save() method)

            // Trait arrondi :
            context.lineJoin = 'round';
            context.lineCap = 'round';

            // Click souris enfoncé sur le canvas, je dessine :
            canvas.mousedown(function (e) {
                painting = true;

                // Coordonnées de la souris :
                cursorX = (e.pageX - this.offsetLeft);
                console.log(cursorX);
                cursorY = (e.pageY - this.offsetTop);
                console.log(cursorY)
            });

            // Relachement du Click sur tout le document, j'arrête de dessiner :
            $(document).mouseup(function () {
                painting = false;
                started = false;
            });

            // Mouvement de la souris sur le canvas :
            canvas.mousemove(function (e) {
                // Si je suis en train de dessiner (click souris enfoncé) :
                if (painting) {
                    // Set Coordonnées de la souris :
                    cursorX = (e.pageX - this.offsetLeft);
                    cursorY = (e.pageY - this.offsetTop);

                    // Dessine une ligne :
                    drawLine();
                }
            });

            // Fonction qui dessine une ligne :
            function drawLine() {
                // Si c'est le début, j'initialise
                if (!started) {
                    // Je place mon curseur pour la première fois :
                    context.beginPath();
                    context.moveTo(cursorX, cursorY);
                    started = true;
                }
                // Sinon je dessine
                else {
                    context.lineTo(cursorX, cursorY);
                    context.strokeStyle = color;
                    context.lineWidth = width_brush;
                    context.stroke();
                }
            }

            // Clear du Canvas :
            function clear_canvas() {
                context.clearRect(0, 0, canvas.width(), canvas.height());
                console.log('cleared !');
            }
            document.getElementById('clearCanvas').addEventListener('click', clear_canvas);
        }

        bookButtonElmt.removeEventListener('click', sign);
        bookButtonElmt.addEventListener('click', reserve);
    }

    reserve() {
        console.log('reserve');
        this.canvasSignature = canvas[0].toDataURL(); // sauvegarde temporairement la signature
        if (baseCanvas == this.canvasSignature) {
            alert('Vous n\'avez pas signé !');
        } else {
            this.bookConfirm = confirm('Validez-vous votre signature ?');
            if (this.bookConfirm) { // Si oui, on sauvegarde et on initialise le timer
                $('#signature, #directive, #clearCanvas').addClass('hidden');
                /// On réactive le scroll sur mobile
                const mq = window.matchMedia('(max-width: 900px)');
                if (mq.matches) {
                    //less than 900px
                    $('html, body').css('overflow', 'auto');
                    $('body').css('position', 'static');
                }
                this.save();
                bookButtonElmt.removeEventListener('click', reserve);
                bookButtonElmt.addEventListener('click', sign);
            } else { // Si non, on recommence sans effacer le canvas
                this.sign();
            }
        }
    }

    save() {
        // https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
        // store Object in WebStorage by stringify it
        sessionStorage.setItem('bookedStation', JSON.stringify(this.stationToBook));
        var retrievedbookedStation = sessionStorage.getItem('bookedStation');
        // https://stackoverflow.com/questions/20603222/saving-image-in-canvas-to-local-storage
        // save canvas image data to sessionStorage
        sessionStorage.setItem('signature', this.canvasSignature);
        console.log('enregistrement de la réservation...');
    }

    seeBook() {

    }

    delBook() {
    }
}

const Book = new booking('', 2000);
var bookButtonElmt = document.getElementById('bookButton');
bookButtonElmt.addEventListener('click', sign);

function sign() {
    Book.sign();
}

function reserve() {
    Book.reserve();
}