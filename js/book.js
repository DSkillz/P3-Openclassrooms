'use strict';
class booking {
    constructor(timeOut) {
        this.stationToBook;
        this.timeOut = timeOut;
    }

    sign() {
        console.log('sign');
        this.stationToBook = station;
        if (typeof station === 'undefined') {
            alert('Sélectionnez d\'abord une station pour pouvoir réserver');
        } else {
            console.log(this.stationToBook.name);
            //bookElmt.removeEventListener('click', Book.sign(), false); // on ne redéclenche pas la méthode de signature au click sur bouton réserver
            //bookElmt.addEventListener('click', Book.reserve(), false);
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
            var canvas = $('#signature');
            var cursorX, cursorY;

            var context = canvas[0].getContext('2d');

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
            }
        }
        bookElmt.removeEventListener('click', sign);

        bookElmt.addEventListener('click', reserve);
    }

    reserve() {
        console.log('reserve');
        if (confirm('Validez-vous votre signature ?')) {
            $('#signature, #directive, #clearCanvas').addClass('hidden');
            /// On réactive le scroll
            const mq = window.matchMedia('(max-width: 900px)');
            if (mq.matches) {
                //less than 900px
                $('html, body').css('overflow', 'auto');
                $('body').css('position', 'static');
            }
            this.save();
            bookElmt.removeEventListener('click', reserve);
            bookElmt.addEventListener('click', sign);
        } else {
            this.sign();
        }

    }

    save() {
        console.log('enregistrement de la réservation...')
    }

    delBook() {
    }
}

const Book = new booking('', 2000);
var bookElmt = document.getElementById('bookButton');
bookElmt.addEventListener('click', sign);
function sign() {
    Book.sign();
}
function reserve() {
    Book.reserve();
}