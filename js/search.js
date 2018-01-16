var obj = [
    {"id": 1, "ad": "aslan", "yas": "22"},
    {"id": 2, "ad": "mehmet", "yas": "55"},
    {"id": 3, "ad": "dobra", "yas": "56"},
    {"id": 4, "ad": "sevgi", "yas": "35"}
];

var alan = document.querySelector("#alan");

view = ()=>{
    newobj = obj.filter(function(a) {
        return a.ad == "aslan";
    });

    var icerik = "";

    newobj.forEach(function(b, index) {
        icerik += `<div class='mavi'>ad: ${b.ad} yas: ${b.yas}`; // template string ES6
    });

    alan.innerHTML = icerik;
};

view();