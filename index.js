let search = document.getElementById('searchButton') // input
let itensList = document.getElementById('itensList') // ul
let itens = document.getElementsByTagName('li') // li

function searchItens () {
    filter = search.value.toUpperCase();
    console.log(filter)
    for (item of itens) {
    txtValue = item.textContent || item.innerText
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
     }}
    
}

search.addEventListener('keyup', searchItens)