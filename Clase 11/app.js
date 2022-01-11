

// $("p").hide();
// $("p").show();

// let parrafo = $(".colorParrafo");

// parrafo.css("color", "red");

// $("p").css("background-color", "blue");

// // let boton = $("#boton");
// // let nombre = $("#iNombre");

// let boton = document.getElementById("boton");

// boton.addEventListener("click", ()=>{

//     let valor = $("#iNombre").val();
//     console.log("Hola " + valor);
// });



// let lista = $("ul");

// console.log(lista);

// $("li:first").css("color", "red");
// $("li:last").css("color", "blue");
// $("li:odd").css("background-color","green");
// $("li:nth-child(1)").css("background-color", "pink");
// $("body").append("<h2>Hola como están</h2>");
// $("body").prepend("<h2>Hola como están</h2>");



// let nombre = document.getElementById("name");
// let apellido = document.getElementById("lastName");
// let edad = document.getElementById("age");
// let guardar = document.getElementById("saveData");
let jsonUsuario =[];

let nombre = $("#name");
let apellido = $("#lastName");
let edad = $("#age");
let guardar = $("#saveData");


guardar.click( () =>{
    //cada vez que se haga click en el boton con id guardar, se crea un objeto literal llamado usuarios, en el cual se guardan la informacion del mismo 
    jsonUsuario.push( {
        name: nombre.val(),
        lastName: apellido.val(),
        age: edad.val()
    });

    //convertimos el objeto json en string para poder guardar en el storage
    localStorage.setItem("Usuario", JSON.stringify(jsonUsuario));
    console.log(jsonUsuario);
    
});


// let salida = document.getElementById("storage");
// let getStorage = document.getElementById("showData");

let salida = $("#storage");
let getStorage = $("#showData");

getStorage.click( () =>{
    //se obtiene el array que se guardó en el storage y se lo convierte en json
    let info = JSON.parse(localStorage.getItem("Usuario"));

    //Se crea un array vacío, para ir agregando en cada indice la info del usuario
    let cadena = [];
    //se crea un for en el cual recorre la longitud del json y en cada indice se pushea la informacion del usuario
    for(let i = 0; i <= info.length - 1; i++){
        cadena.push("Nombre: " + info[i].name + " <br> Apellido: " + info[i].lastName + " <br> Edad: " + info[i].age + "<br>");
        
    }
    //se inserta la informacion del usuario en el html
    // salida.innerHTML = cadena;
    
    $("#lista").html(`<li> ${cadena}</li>`);
    
    
});
