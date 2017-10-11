function displayDialog() {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
}

function manageImg() {
    this.add = function () {
        document.getElementById('dialogboxbody').innerHTML += '<input class="inputUrl" type="url" placeholder="Entrez l\'url de l\'image à ajouter ou sélectionnez une image sur votre disque.">' +
            '<form class="form1" runat="server">\n' +
            '        <input type=\'file\' id="imgInp" />\n' +
            '        <img id="blah" src="#" alt="your image" />\n' +
            '    </form><br><br>';
        $('#dialogboxbody').addClass('dialogboxscroll');
    }
    this.del = function () {

    }
}

var Manage = new manageImg();

function CustomInputBox() {
    this.render = function () {
        displayDialog();
        document.getElementById('dialogboxhead').innerHTML = 'Veuillez ajouter les url des images à ajouter';
        document.getElementById('dialogboxbody').innerHTML = '<img id="addDiapo" onclick="Manage.add();" src="https://icon-icons.com/icons2/930/PNG/512/square-add_icon-icons.com_72277.png" width="30px"/><input id="firstInputUrl" class="inputUrl" type="url" placeholder="Entrez l\'url de l\'image à ajouter ou sélectionnez une image sur votre disque."><br><br>';
        document.getElementById('dialogboxbody').innerHTML += '<img id="delDiapo" onclick="Manage.del()"; src="https://icon-icons.com/icons2/930/PNG/512/square-minus_icon-icons.com_72274.png"/><br>';
    }
    this.cancel = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var InputBox = new CustomInputBox();

function CustomAlert() {
    this.render = function (dialog) {
        displayDialog();
        document.getElementById('dialogboxhead').innerHTML = "Erreur.";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
    this.ok = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var Alert = new CustomAlert();

function CustomConfirm() {
    this.render = function (dialog, op, id) {
        displayDialog();

        document.getElementById('dialogboxhead').innerHTML = "Confirmez cette action.";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Confirm.yes(\'' + op + '\',\'' + id + '\')">Yes</button> <button onclick="Confirm.no()">No</button>';
    }
    this.no = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
    this.yes = function (op, id) {
        if (op == "delete_post") {
            deletePost(id);
        }
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var Confirm = new CustomConfirm();


//Custom Prompt (MDP et Images à ajouter / supprimer)
function CustomPrompt() {
    this.render = function (dialog, func) {
        displayDialog();

        document.getElementById('dialogboxhead').innerHTML = "Une valeur est requise.";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxbody').innerHTML += '<br><input type="password" id="prompt_value1">';
        document.getElementById('prompt_value1').focus();
        document.getElementById('dialogboxfoot').innerHTML = '<button id="ok" onclick="Prompt.ok(\'' + func + '\')">OK</button> <button id="cancel" onclick="Prompt.cancel()">Annuler</button>';
    }
    this.cancel = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
    this.ok = function (func) {
        if (document.getElementById('prompt_value1') != null) {
            var prompt_value1 = document.getElementById('prompt_value1').value;
        }
        window[func](prompt_value1);
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var Prompt = new CustomPrompt();