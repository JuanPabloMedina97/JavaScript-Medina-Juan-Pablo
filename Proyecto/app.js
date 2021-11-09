class PaloHockey{
    constructor(marca, modelo, carbono, kevlar, aramida, vidrio, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.carbono = carbono;
        this.kevlar = kevlar;
        this.aramida = aramida;
        this.vidrio = vidrio;
        this.precio = precio;
    }

    getInfo(){
        
        return "Marca: " + this.marca + "<br> Modelo: " + this.modelo + "<br> Carbono: " + this.carbono
        + "% <br> Kevlar: " + this.kevlar + "% <br> Aramida: " + this.aramida + "% <br> Vidrio: " 
        + "% <br> Precio: $" + this.precio + "<br>";
    }

    getInfoCompra(){
        return "Marca: " + this.marca + " Modelo: " + this.modelo + " Precio: $" + this.precio;
    }
    
}


    const palo1 = new PaloHockey("Grays", "KN 7000 ULTRABOW", 80, 20, 0, 0 , "4600000");
    const palo2 = new PaloHockey("Grays", "KN 6000 DYNABOW", 70, 10, 0, 20, "4000000");
    const palo3 = new PaloHockey("Grays", "GR 11000 PROBOW", 100, 0, 0, 0, "5800000");
    const palo4 = new PaloHockey("Grays", "GR 10000 JUMBOW", 90, 0, 10, 0, "3799400");

    let lista = [];

    lista.push(palo1);
    lista.push(palo2);
    lista.push(palo3);
    lista.push(palo4);


function info(){
    alert("Elige que palo deseas comprar, 0 para salir");
    let c = 1;
    for(let i = 0; i <= (lista.length -1); i++){ /* Use este for porque el for in no podía poner un iterador para las opciones de compra */  
        console.log( c + ": " + lista[i].getInfoCompra());
        c++;
    }
    
}/*Funcion info donde te muestra marca, modelo y precio del producto */







function carroCompras(){
    let precio = 0;
    let r;
    do{
        console.log(info());
        r = parseInt(prompt());
        
        console.clear();

        switch(r){

            case 1:
                precio = precio + parseInt(palo1.precio);
                break;

            case 2:
                precio = precio + parseInt(palo2.precio);
                break;

            case 3:
                precio = precio + parseInt(palo3.precio);
                break;

            case 4:
                precio = precio + parseInt(palo4.precio);
                break;

            case 0:
                
                break;
            
            default:
                alert("Opcion incorrecta, intente nuevamente");
                r =1 ;
                break;
                
        }

    }while(r >= 1 && r <= 4)

    return precio;
    

}/*Funcion en donde se elige el producto y devuelve un precio total */



function simuladorPrecio(precio){
    this.precio = precio;

    let nueve = ((precio * 25 / 100) + precio) / 9;
    let seis = ((precio * 15 / 100) + precio) / 6;
    let tres = ((precio * 10 / 100) + precio) / 3;
    let uno = precio;

    let listaPrecios = "Opcion 1: 1 cuota de: $" + uno + "\nOpcion 2: 3 cuotas de: $" + tres + "\nOpcion 3: 6 cuotas de: $" + seis + "\nOpcion 4: 9 cuotas de: $" + nueve;
    console.log(listaPrecios);
    

    let precioCuotas;
    let cuotas;
    do{

        r = parseInt(prompt("Ingrese una opcion"));
        

        switch(r){

            case 1:

                r= prompt("Confirma el pago de 1 Cuota de: $" + uno + "? s/n"); /*s para si, n para no */
                if(r == "s"){
                    alert("Felicidades por tu compra!");
                    precioCuotas = uno;
                    console.clear();
                    cuotas = "1 Cuota";
                }
                else{
                    alert("Opcion incorrecta, elige nuevamente");
                    r = 1;
                };

                break;

            case 2:

                r= prompt("Confirma el pago de 3 Cuotas de: $" + tres + "? s/n"); /*s para si, n para no */
                if(r == "s"){
                    alert("Felicidades por tu compra!");
                    precioCuotas = tres;
                    console.clear();
                    cuotas = "3 Cuotas";
                }
                else{
                    alert("Opcion incorrecta, elige nuevamente");
                    r = 1;
                };

                break;

            case 3:

                r= prompt("Confirma el pago de 6 Cuotas de: $" + seis + "? s/n"); /*s para si, n para no */
                if(r == "s"){
                    alert("Felicidades por tu compra!");
                    precioCuotas = seis;
                    console.clear();
                    cuotas = "6 Cuotas";
                }
                else{
                    alert("Opcion incorrecta, elige nuevamente");
                    r = 1;
                };

                break;

            case 4:

                r= prompt("Confirma el pago de 9 Cuotas de: $" + nueve + "? s/n"); /*s para si, n para no */
                if(r == "s"){
                    alert("Felicidades por tu compra!");
                    precioCuotas = nueve;
                    console.clear();
                    cuotas = "9 Cuotas";
                }
                else{
                    alert("Opcion incorrecta, elige nuevamente");
                    r = 1;
                };

                break;

            default:
                alert("Opcion incorrecta, intente nuevamente");
                r =1 ;
                break;
                
        }

    }while(r >= 1 && r <= 4)

    return "Hiciste una compra de: $" + precio + " en " + cuotas + " de $" + precioCuotas;
    
}

let prec = carroCompras();

console.log(simuladorPrecio(prec));




