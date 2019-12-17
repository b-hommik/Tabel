var signInTime = 0;
var signOutTime = 0;
var signInHours = 0;
var signInMinutes = 0;
var signInSeconds = 0;
function getSingInValue() {
    var signInTime = new Date();
    var signInHours = signInTime.getHours();
    var signInMinutes = signInTime.getMinutes();
    var signInSeconds = signInTime.getSeconds();
     document.getElementById("login").style.display = "none";
     document.getElementById("input").style.display = "block";
     document.getElementById("header").style.display = "block";
     var userName = document.getElementById("userName").value;
     var userName=userName.toLowerCase();
     console.log(userName.charAt(0).toUpperCase() + userName.slice(1));
     var passWord= document.getElementById("passWord").value;
     console.log(passWord);
     document.getElementById("kasutajanimi").innerHTML = "Tere, " + userName.charAt(0).toUpperCase() + userName.slice(1) +"!";
     console.log(signInTime);
}


function getFormValue() {  
     var progemisKeel1 = document.getElementById("progemisKeel1").value;
     document.getElementById("input1").innerHTML = progemisKeel1.toLowerCase();
     var progemisKeel2 = document.getElementById("progemisKeel2").value;
     document.getElementById("input2").innerHTML = progemisKeel2.toLowerCase();
     var progemisKeel3 = document.getElementById("progemisKeel3").value;
     document.getElementById("input3").innerHTML = progemisKeel3.toLowerCase();
     document.getElementById("table").style.display = "block";
     document.getElementById("input").style.display = "none";
}
function getSingOutValue() {
    var signOutTime = new Date();
    console.log(signOutTime);
    document.getElementById("table").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("login").style.display = "block";
    var signOutHours = signOutTime.getHours();
    var signOutMinutes = signOutTime.getMinutes();
    var signOutSeconds = signOutTime.getSeconds();
    var sessionTimeHours = signOutHours - signInHours;
    var sessionTimeMinutes = signOutMinutes - signInMinutes;
    var sessionTimeSeconds = signOutSeconds - signInSeconds;
    console.log(signOutHours + ":" + signOutMinutes + ":" + signOutSeconds);
    console.log(signInHours + ":" + signInMinutes + ":" + signInSeconds);
    console.log(sessionTimeHours + ":" + sessionTimeMinutes + ":" + sessionTimeSeconds);
        /*alert("Sessiooni pikkus "+sessionTimeHours + ":" + sessionTimeMinutes + ":" + sessionTimeSeconds);*/

}

