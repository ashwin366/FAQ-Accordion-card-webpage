var clickable = document.querySelectorAll(".expand");
var len = clickable.length;

for(var i=0; i < len; i++){

  clickable[i].addEventListener("click", function() {

    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("hidden");

  })

}
