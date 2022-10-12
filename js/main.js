//ARRAY DE OBJETOS ARTICULOS
const articulos = [
    {nombre: "Tilcara", precio: "750", stock:"100"},
    {nombre: "Purmamarca", precio: "850", stock:"100"},
    {nombre: "Maimara", precio: "950", stock:"100"}
];
//CREO MI ARRAY CARRITO VACIO
let carrito = [];
//LLAMO A LA FUNCION ANTES DE CREARLA "HOISTING"
comprar();
//CREO LA FUNCION COMPRAR
function comprar(){
    let opcion = prompt("Desea comprar nuestros productos?").toLowerCase();
    while (opcion != "si" && opcion != "no") {
        alert("Ingrese una opcion valida");
        opcion = prompt("Desea comprar nuestros productos?").toLowerCase();
    }
    if(opcion==="si"){
        alert("A continuacion nuestra lista de productos");
        let vinos = articulos.map((articulo) => 
        articulo.nombre+" $"+articulo.precio
        );
        alert(vinos.join(" \n "));
    }else if(opcion === "no"){
        alert("Gracias por venir...")
    }
    while (opcion != "no") {
        let producto = prompt("Agrega un producto a tu carrito").toLowerCase();
        let precio = 0;
        let stock = 0;

        if (producto === "tilcara" || producto === "purmamarca" || producto === "maimara") {
            switch (producto) {
                case "tilcara":
                    precio = 750
                    break;
                case "purmamarca":
                    precio = 850
                    break;
                case "maimara":
                    precio = 950
                    break;
                
                default:
                    break;
            }
            let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));
            carrito.push({producto, unidades, precio, stock})            
        }else{
            alert("No tenemos ese producto.");
        }

        opcion = prompt("Desea seguir comprando?").toLowerCase();
        while (opcion === "no") {
            alert("Gracias por su compra")
            carrito.forEach((carritoCompleto) =>{
                console.log(`producto: ${carritoCompleto.producto}, unidades: ${carritoCompleto.unidades},
                total a pagar por porducto: ${carritoCompleto.unidades*carritoCompleto.precio}`);
            });
            const total = carrito.reduce((acc, el) =>acc + el.precio * el.unidades, 0);
            console.log(`El total es: ${total}`);
            alert(`El total de su compra es: $${total}`);
            break;
        }
    }

}





