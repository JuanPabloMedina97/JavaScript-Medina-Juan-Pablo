// let nombreUsuario = prompt("Usuario");
// let nombreEdad = prompt("edad");


// localStorage.setItem("Usuario", nombreUsuario);
// localStorage.setItem("Edad", nombreEdad);

// let resultado = localStorage.getItem("Usuario");
// console.log(typeof resultado);

// let resultadoEdad = localStorage.getItem("Edad");
// console.log(typeof resultadoEdad);

// let nombreUsuario = prompt("Nombre");

// sessionStorage.setItem("Usuario", nombreUsuario);


// for(let i = 0; i < 3 ; i++){

//     let valor = prompt("Ingrese su usuario");
//     localStorage.setItem(i, valor);
// }

// for(let i = 0; i < localStorage.length; i++){

//     let clave = localStorage.key(i);
//     console.log( "Clave: " + clave);
//     console.log( "Valor: " + localStorage.getItem(clave));
// }


// let usuario = {nombre: "juancho", edad: 50 , perro: true};

// let usuarioJSON = JSON.stringify(usuario);

// console.log(usuario);

// console.log(usuarioJSON);


// localStorage.setItem("Usuario", usuario);
// localStorage.setItem("UsuarioJSON", usuarioJSON);

// let enJSON = localStorage.getItem("UsuarioJSON");
// let resultadoParse = JSON.parse(enJSON);
// console.log(resultadoParse);







// function cargarVotante(){
//     let dni = prompt("DNI");
//     let voto = prompt("A o B");
//     localStorage.setItem(dni, voto);
// }

// function resultado(){
//     let votoA = 0;
//     let votoB = 0;

//     for(let i = 0; i < localStorage.length; i++){

//         let clave = localStorage.key(i);
//         let valor = localStorage.getItem(clave);

//         if(valor.toLocaleUpperCase() == "A") votoA = votoA + 1;
//         else if(valor.toLocaleUpperCase() == "B") votoB = votoB + 1;
//         else alert("Voto nulo");
        
//     }
//     console.log("Votos A :" + votoA);
//     console.log("Votos B :" + votoB);
// }

// function limpiarConsola(){
//     console.clear();
// }

// function limpiarStorage(){
//     localStorage.clear();
// }
