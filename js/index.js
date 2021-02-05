/**
    * Projet : PlayEscape
    * @author Alexandre PINTRAND / Bryan FERREIRA / Grégoire PEAN / Sabrina LAPAIRE
    * @version 1.0, 29/01/2021, Initial revision
*/

// sessionStorage.clear();

function timeoutEnigme1() {
    alert("La réponse se trouve dans les éléments de la page.")
}

function validateEnigme1() {
    var password = document.getElementById("passwordEnigme1");

    if (password.value == "mzRhxdTb") {
        window.location.replace("file:///C:/Users/ALEXANDRE.PNTRN/Documents/C%23/ATMUL/playescape/website/enigme2.html");
        sessionStorage.setItem("passwordEnigme1", "mzRhxdTb");
    } else {
        alert("Mauvaise réponse.");
    }
}

function checkEnigme1() {
    var passwordEnigme1 = sessionStorage.getItem("passwordEnigme1");

    if (passwordEnigme1 == null) {
        alert("Cheh! Tu as voulu contourner, mais on t'a contré! xD")
        window.location.replace("file:///C:/Users/ALEXANDRE.PNTRN/Documents/C%23/ATMUL/playescape/website/enigme1.html");    }
}

function timeoutEnigme2() {
    alert("La réponse se trouve dans le titre de la page.")
}

function validateEnigme2() {
    var password = document.getElementById("passwordEnigme2");

    if (password.value == "1234") {
        window.location.replace("file:///C:/Users/ALEXANDRE.PNTRN/Documents/C%23/ATMUL/playescape/website/enigme3.html");
        sessionStorage.setItem("passwordEnigme2", "1234");
    } else {
        alert("Mauvaise réponse.");
    }
}

function checkEnigme2() {
    var passwordEnigme2 = sessionStorage.getItem("passwordEnigme2");

    if (passwordEnigme2 == null) {
        alert("Cheh! Tu as voulu contourner, mais on t'a contré! xD")
        window.location.replace("file:///C:/Users/ALEXANDRE.PNTRN/Documents/C%23/ATMUL/playescape/website/enigme1.html");
    }
}

function timeoutEnigme3() {
    alert("La réponse se trouve dans la console.")
}

function indiceEnigme3() {
    console.log("CTRL + A");
}

function goToEnigme4() {
    window.location.replace("file:///C:/Users/ALEXANDRE.PNTRN/Documents/C%23/ATMUL/playescape/website/enigme4.html");
}