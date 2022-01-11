
    let listaJson = [
        {
        marca: "Grays",
        modelo: "KN 7000 ULTRABOW",
        carbono: "80",
        kevlar: "20",
        aramida: "0",
        vidrio: "0",
        precio: 4600000
    },
    {
        marca: "Grays",
        modelo: "KN 6000 DYNABOW",
        carbono: "70",
        kevlar: "10",
        aramida: "0",
        vidrio: "20",
        precio: 4000000
    },
    {
        marca: "Grays",
        modelo: "GR 11000 PROBOW",
        carbono: "100",
        kevlar: "0",
        aramida: "0",
        vidrio: "0",
        precio: 5800000
    },
    {
        marca: "Grays",
        modelo: "GR 10000 JUMBOW",
        carbono: "90",
        kevlar: "0",
        aramida: "10",
        vidrio: "0",
        precio: 3799400
    },
];

window.onload = () =>{
    for(let i = 0; i <= listaJson.length -1 ; i++){
        //por cada vuelta creamos un elemento li en el cual se agregará a la lista de productos
        let producto = document.createElement("li");
        producto.style.padding = "20px";
        //se crea una variable info en el cual obtiene la informacion de cada producto del json
        let info = "Marca: " + listaJson[i].marca + "<br> Modelo: " + listaJson[i].modelo + "<br> Carbono: " + listaJson[i].carbono
        + "<br>Kevlar: " + listaJson[i].kevlar + "<br> Aramida: " + listaJson[i].aramida + "<br> Vidrio: " + listaJson[i].vidrio + "<br> Precio: " + listaJson[i].precio;
        //se inserta en el html la informacion de cada producto
        producto.innerHTML = info;
        let li = document.getElementById("listaPalos")
        li.appendChild(producto);
    }
    localStorage.setItem("Productos", JSON.stringify(listaJson));
};
  
    

    
    
    

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let rFinal = document.getElementById("precio");
let res = 0;
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
//creamos eventos en el cual cada boton suma un precio diferente el producto
btn1.addEventListener("click", ()=>{
    //creamos una varible en cual se guarda el string del storage convertido en json
    let productos = JSON.parse(localStorage.getItem("Productos"));
    //creamos una variable en el cual se guarda el precio del producto, recorriendo el json
    let precioPalo = productos[0].precio;
    //se suma el precio del valor
    res = res + precioPalo;
    //aqui se muestra el valor final del producto a traves de un input deshabilitado
    rFinal.value ="$ " + res;
    //se agrega al storage el precio final
    localStorage.setItem("PrecioFinal", res);
    //creamos un contador en el cual suma la cantidad de productos seleccionados al carro
    i1 = i1 +1;
    let c1 = document.getElementById("c1");
    c1.value = i1;
});

btn2.addEventListener("click", ()=>{
    //creamos una varible en cual se guarda el string del storage convertido en json
    let productos = JSON.parse(localStorage.getItem("Productos"));
    //creamos una variable en el cual se guarda el precio del producto, recorriendo el json
    let precioPalo = productos[1].precio;
    //se suma el precio del valor
    res = res + precioPalo;
    //aqui se muestra el valor final del producto a traves de un input deshabilitado
    rFinal.value ="$ " + res;
    //se agrega al storage el precio final
    localStorage.setItem("PrecioFinal", res);
    //creamos un contador en el cual suma la cantidad de productos seleccionados al carro
    i2 = i2 +1;
    let c1 = document.getElementById("c2");
    c1.value = i2;
});
btn3.addEventListener("click", ()=>{
    //creamos una varible en cual se guarda el string del storage convertido en json
    let productos = JSON.parse(localStorage.getItem("Productos"));
    //creamos una variable en el cual se guarda el precio del producto, recorriendo el json
    let precioPalo = productos[2].precio;
    //se suma el precio del valor
    res = res + precioPalo;
    //aqui se muestra el valor final del producto a traves de un input deshabilitado
    rFinal.value ="$ " + res;
    //se agrega al storage el precio final
    localStorage.setItem("PrecioFinal", res);
    //creamos un contador en el cual suma la cantidad de productos seleccionados al carro
    i3 = i3 +1;
    let c1 = document.getElementById("c3");
    c1.value = i3;
});
btn4.addEventListener("click", ()=>{
    //creamos una varible en cual se guarda el string del storage convertido en json
    let productos = JSON.parse(localStorage.getItem("Productos"));
    //creamos una variable en el cual se guarda el precio del producto, recorriendo el json
    let precioPalo = productos[3].precio;
    //se suma el precio del valor
    res = res + precioPalo;
    //aqui se muestra el valor final del producto a traves de un input deshabilitado
    rFinal.value ="$ " + res;
    //se agrega al storage el precio final
    localStorage.setItem("PrecioFinal", res);
    //creamos un contador en el cual suma la cantidad de productos seleccionados al carro
    i4 = i4 +1;
    let c1 = document.getElementById("c4");
    c1.value = i4;
});

//se crea el evento reset, para limpiar el carro
let btnReset = document.getElementById("reset");

btnReset.addEventListener("click", ()=>{
    res = 0;
    rFinal.value = 0;
    localStorage.setItem("PrecioFinal", 0);
    c1.value = 0;
    c2.value = 0;
    c3.value = 0;
    c4.value = 0;
});

let btnConfirm = document.getElementById("confirm");


//simula un confirmar compra
btnConfirm.addEventListener("click", ()=>{
    
    let conf = prompt("Confirmar compra de: $" + res + " S/N?");
    if(conf.toUpperCase() == "S") alert("felicidades, hiciste una compra de: $" + res);
    else if(conf.toUpperCase() == "N") alert("Revisa bien tu compra");
    else if(conf.toUpperCase() !="S" || conf.toUpperCase != "N")alert("Opcion incorrecta");
    
});







