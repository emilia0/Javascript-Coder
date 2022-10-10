// //ingresar nombre de producto.

// let nombreProducto = prompt("Ingresar nombre del producto");

// if (nombreProducto == "") {
//     alert("No ingresaste nombre de producto. Por favor ingresa un nombre");
// }
// else {
//     alert("nombre de producto ingresado " + nombreProducto);
// }

// //Ingresar precio del producto y cantidad hasta calcular precio final

// let precioProducto = parseFloat (prompt("Cual es el precio?"));
   
// alert (`El producto ingresado es ${nombreProducto} y el precio es ${precioProducto}`);

// let cantidad = parseInt(prompt ("Ingresa la cantidad de juguetes"));    

// function calcularPrecio(){
//     let subtotal = precioProducto * cantidad;
//     console.log (`El subtotal es ${subtotal} pesos`)

// }

// calcularPrecio(); 

// function calcularPrecioFinal (){
//     let precioConIva = precioProducto / 1.21;
//     let precioFinal = (precioConIva + precioProducto) * cantidad;
//     console.log ("El precio con IVA incluido es " + precioFinal.toFixed(2) );
// }

// calcularPrecioFinal();

// //Formas de pago. Credito o efectivo

// function formaDePago (){
//     let formaDePago = prompt ('Como queres pagar. Ingresa 1 en efectivo o 2 con tarjeta');
//     switch (formaDePago){
//         case "1": 
//             alert ("Gracias pagas al momento de retirar los productos. Gracias por la compra");
//             break;
//         case "2": 
//             alert ('Vas a pagar con tarjeta. Gracias por la compra');
//             break;
//         default:
//             alert ('Ingresa opcion 1 o 2');
//     }
// }

// formaDePago();


class producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}
let listaDeProductos = [];

const agregarProducto = () => {
    let nombre = prompt ("Ingrese el nombre del producto");
    let precio = parseFloat (prompt("Ingresa el precio del producto"));
    let productoNuevo = new producto(nombre, precio);

    listaDeProductos.push(productoNuevo);
    return listaDeProductos; 

}

agregarProducto();

function calcularDescuento(){
    if (this.precio > 2000){
        this.precio = this.precio - (this.precio * 0,02);
    }
    return this.precio;
}

calcularDescuento();
