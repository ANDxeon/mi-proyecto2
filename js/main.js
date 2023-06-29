//Aqui estoy selecionando todos lo items del menu de nave
const menuItems = document.querySelectorAll('.item-menu');
console.log(menuItems);

//Recorrer la lista de nodos
menuItems.forEach(function (item) {
    //escuchar el click en todos
    item.addEventListener("click", funtion (e){
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");

    })
})