var output = document.querySelector("#output");
console.log(globalJson);
view = ()=>{

    myvalue = document.querySelector("#filter").value;

    newobj = globalJson.filter(function(a) {
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