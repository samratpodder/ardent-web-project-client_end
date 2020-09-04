
var sendKey = document.getElementById("send");
sendKey.addEventListener("mousemove" ,function(){
    sendKey.classList.remove("btn-outline-danger");
    sendKey.classList.add("btn-outline-success");
});
sendKey.addEventListener("mouseout" ,function(){
    sendKey.classList.add("btn-outline-danger");
    sendKey.classList.remove("btn-outline-success");
});