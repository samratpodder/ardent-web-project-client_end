var isGuest = true;
var guesttext = document.querySelector("#isguest");
var haveacc = document.querySelector("#asktologin");
var username = "Samrat";
if (isGuest === false){
    guesttext.innerText = " ";
    haveacc.innerText = "Welcome back to your cart,  " + username+ " !";
}

var buttonnext = document.querySelectorAll(".next");
// console.log(buttonnext);
buttonnext[0].addEventListener("click",function (){
	document.querySelector(".billing-details").classList.add("d-none");
	setInterval(() => {
		
	}, 1000);
	document.querySelector(".personal-details").classList.remove("d-none");
});
buttonnext[1].addEventListener("click", function(){
	document.querySelector(".personal-details").classList.add("d-none");
	document.querySelector(".payment-details").classList.remove("d-none");
	document.querySelector(".submit-btn").classList.remove("d-none");
});
var submitbutton = document.querySelector(".submit-btn");
submitbutton.addEventListener("click", function(){
	location.href = "payment-success.html";
});
document.querySelector(".prev-one").addEventListener("click",function(){
	document.querySelector(".personal-details").classList.add("d-none");
	document.querySelector(".billing-details").classList.remove("d-none");

});
document.querySelector(".prev-two").addEventListener("click",function(){
	document.querySelector(".payment-details").classList.add("d-none");
	document.querySelector(".submit-btn").classList.add("d-none");
	document.querySelector(".personal-details").classList.remove("d-none");

});
var allprices = document.querySelectorAll(".price");
var discount =1;
var subtotal = 0;
var price = 5;
for(var i =0;i<allprices.length;i++){
	allprices[i].innerText = price;
	subtotal+=price;
}
var total = subtotal-discount;
document.querySelector(".subtotal").innerText = subtotal;
document.querySelector(".total").innerText = total;
document.querySelector(".discount").innerText = discount;