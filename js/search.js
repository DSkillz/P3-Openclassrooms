var obj = [
    {"id": 1, "name": "aslan", "age": "22"},
    {"id": 2, "name": "mehmet", "age": "55"},
    {"id": 3, "name": "dobra", "age": "56"},
    {"id": 4, "name": "sevgi", "age": "35"}
];

var output = document.querySelector("#output");

view = ()=>{

    myvalue = document.querySelector("#filter").value;

    newobj = obj.filter(function(a) {
        return a.name.indexOf(myvalue) != -1 || a.age.indexOf(myvalue) != -1;
    });

    var templateStr = "";

    newobj.forEach(function(b, index) {
        templateStr += `<div class='mavi'>ad: ${b.name} yas: ${b.age}`; // template string ES6
    });

    output.innerHTML = templateStr;

    if (newobj.length == 0) {
        output.innerHTML = `<div class='pink'>Not found</div>`
    }

};

view();