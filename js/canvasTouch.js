var ongoingTouches = new Array;

function colorForTouch(touch) {
    var id = touch.identifier;
    id = id.toString(16); // make it a hex digit
    return "#" + id + id + id;
}

function ongoingTouchIndexById(idToFind) {
    for (var i=0; i<ongoingTouches.length; i++) {
        var id = ongoingTouches[i].identifier;

        if (id == idToFind) {
            return i;
        }
    }
    return -1;    // not found
}

function handleStart(evt) {
    // evt.preventDefault();
    var el = document.getElementById("canvas");
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i=0; i<touches.length; i++) {
        ongoingTouches.push(touches[i]);
        var color = colorForTouch(touches[i]);
        ctx.fillStyle = color;
        ctx.fillRect(touches[i].pageX - this.offsetLeft, touches[i].pageY - this.offsetTop, 4, 4);
    }
}

function handleMove(evt) {
    evt.preventDefault();
    var el = document.getElementById("canvas");
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    ctx.lineWidth = 4;

    for (var i=0; i<touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(ongoingTouches[idx].pageX-this.offsetLeft, ongoingTouches[idx].pageY-this.offsetTop);
        ctx.lineTo(touches[i].pageX-this.offsetLeft, touches[i].pageY-this.offsetTop);
        ctx.closePath();
        ctx.stroke();
        ongoingTouches.splice(idx, 1, touches[i]);  // swap in the new touch record
    }
}

function handleEnd(evt) {
    evt.preventDefault();
    var el = document.getElementById("canvas");
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    ctx.lineWidth = 4;

    for (var i=0; i<touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(ongoingTouches[i].pageX, ongoingTouches[i].pageY);
        ctx.lineTo(touches[i].pageX, touches[i].pageY);
        ongoingTouches.splice(i, 1);  // remove it; we're done
    }
}

function handleCancel(evt) {
    evt.preventDefault();
    var touches = evt.changedTouches;

    for (var i=0; i<touches.length; i++) {
        ongoingTouches.splice(i, 1);  // remove it; we're done
    }
}


function startup() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchleave", handleEnd, false);
    el.addEventListener("touchmove", handleMove, false);
}
