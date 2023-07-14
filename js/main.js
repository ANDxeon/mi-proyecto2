//Aqui estoy selecionando todos lo items del menu de nave
const menuItems = document.querySelectorAll('.item-menu');
console.log(menuItems);

//Recorrer la lista de nodos
menuItems.forEach(function (item) {
    //escuchar el click en todos
    item.addEventListener("click", function (e){
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");

    })
})

//MODO OSCURO
const themeSwitcher = document.querySelector("#theme-switcher");
let darkMode = false;
const iconos = document.querySelectorAll(".item-redes");
//console.log(iconos);

themeSwitcher.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    iconos.forEach(function(icono) {
        icono.classList.toggle("color_icon");
    });
    
    darkMode = !darkMode;

    if (darkMode) {
        themeSwitcher.innerHTML = "Modo Light";
    } else {
        themeSwitcher.innerHTML = "Modo Dark";
    }

});
