let searchButton = document.getElementById('searchButton') // input
let itensList = document.getElementById('itensList') // ul
let itens = document.getElementsByTagName('li') // li

function searchItens () {
    filter = searchButton.value.toUpperCase();
    for (item of itens) {
    txtValue = item.textContent || item.innerText
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
     }}
    
}
searchButton.addEventListener('keyup', searchItens)

var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slideImage");
  console.log(slides.length)
  var dots = document.getElementsByClassName("nextButton");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for( slide of slides) {
    slide.style.display ="none"
  }
  for(dot of dots) {
    dot.className = dot.className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}