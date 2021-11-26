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

    var precioFinal = 0;


function kn7000(){
    let precio = parseInt(palo1.precio);
    let cantidad = document.getElementById("cantidad");
    
    precio = precio * cantidad.value;
    
    return precio;
}

/*Aqui se actualiza el precio del carro de compras */

window.onload = function precioTotal(){
    
}




