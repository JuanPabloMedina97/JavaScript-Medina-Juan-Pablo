let nombre = document.getElementById("name");
let apellido = document.getElementById("lastName");
let edad = document.getElementById("age");
let guardar = document.getElementById("saveData");
let jsonUsuario =[];

guardar.addEventListener("click", () =>{
    //cada vez que se haga click en el boton con id guardar, se crea un objeto literal llamado usuarios, en el cual se guardan la informacion del mismo 
    jsonUsuario.push( {
        name: nombre.value,
        lastName: apellido.value,
        age: edad.value
    });

    //convertimos el objeto json en string para poder guardar en el storage
    localStorage.setItem("Usuario", JSON.stringify(jsonUsuario));
    console.log(jsonUsuario);
});


let salida = document.getElementById("storage");
let getStorage = document.getElementById("showData");

getStorage.addEventListener("click", () =>{
    //se obtiene el array que se guardó en el storage y se lo convierte en json
    let info = JSON.parse(localStorage.getItem("Usuario"));

    //Se crea un array vacío, para ir agregando en cada indice la info del usuario
    let cadena = [];
    //se crea un for en el cual recorre la longitud del json y en cada indice se pushea la informacion del usuario
    for(let i = 0; i <= info.length - 1; i++){
        cadena.push("Nombre: " + info[i].name + " <br> Apellido: " + info[i].lastName + " <br> Edad: " + info[i].age + "<br>");
        
    }
    //se inserta la informacion del usuario en el html
    salida.innerHTML = cadena;
    
    
});