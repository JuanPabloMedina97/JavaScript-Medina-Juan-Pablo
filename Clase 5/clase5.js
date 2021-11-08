
class Persona{
    constructor(nombre, apellido, edad, domicilio, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
        this.dni = dni;
    }


    getInfo(){
        return "Nombre: " + this.nombre + "<br> Apellido: " + this.apellido + "<br> Edad: " + this.edad
        + "<br> Domicilio: " + this.domicilio + "<br> DNI: " + this.dni + "<br>";
    }

    saludar(){
        return this.nombre + " Te está saludando!";
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
}

// function crearPersona(){
//     let cantidad = parseInt(prompt("Ingrese la cantidad de personas a crear. Maximo 3 personas."));
//     var personas = [];

//     if(cantidad <= 3){
//         for(let i = 0 ;i <= (cantidad - 1); i++){
        
        
//             let nombre = prompt("Ingrese el nombre de la persona");
//             let apellido = prompt("Ingrese el apellido de la persona");
//             let edad = parseInt(prompt("Ingrese la edad de la persona"));
//             let domicilio = prompt("Ingrese el domicilio de la persona");
//             let dni = parseFloat(prompt("Ingrese el dni de la persona"));
    
//             var persona = new Persona(nombre, apellido, edad, domicilio, dni);
//             personas.push(persona);
//         }
//         return personas;
//     }else alert("No papu, menos de 3 tiene que ser, nv.")

    
    
// }

const persona1 = new Persona("Juan", "Pablo", 24, "Argentina", 23324235);

console.log(persona1.getInfo());
console.log(persona1.saludar());

persona1.setNombre = "Pedro";

console.log(persona1.getInfo());




// var listaPersona = crearPersona();


// console.log(listaPersona.sort( (a,b) => a.edad - b.edad ));












