function Scrolldown() {
    window.scrollTo(0,50); 
}

//window.onload = Scrolldown();
var reviewPictures = document.querySelectorAll(".review-picture");
var reviewblock = document.querySelectorAll(".review-text");
var i=0;
setInterval(showReview,2000);

function showReview() {
    reviewblock[i].classList.toggle("d-none");
    reviewPictures[i].style.opacity = 1;
    for(var j=0;j<3;j++)
    {
        if(j!==i){
            reviewPictures[j].style.opacity = 0.6;
            reviewblock[j].classList.add("d-none");
        }
    }
    // setTimeout(nowork,1500);
    // reviewblock[i].classList.toggle("d-none");
    i++;
    i=i%3;
}
