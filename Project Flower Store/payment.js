var isGuest = true;
var guesttext = document.querySelector("#isguest");
var haveacc = document.querySelector("#asktologin");
var username = "Samrat";
if (isGuest === false){
    guesttext.innerText = " ";
    haveacc.innerText = "Welcome back to your cart,  " + username+ " !";
}