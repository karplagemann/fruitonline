// let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let carrito;
if(JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}
const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

const body = document.getElementById('carrito');
if(carrito.length == 0){
    const texto = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>No hay productos en el carrito</h1>
            <a class='btnVolver' href='index.html'>
                <button>VOLVER</button>
            </a>
        </div>`;    
    body.innerHTML += texto;
} else {
    const titulo = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>Carrito de compras</h1>
        </div>`;
    body.innerHTML += titulo;
    const table = `
        <div class='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class='txtTabla'>PRODUCTOS</th>
                        <th class='txtTabla'>CANTIDAD</th>
                        <th class='txtTabla'>PRECIO</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalCarrito().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div class='btn-container'>
            <a href="index.html"> <button class='btn btn-light me-2'>Seguir comprando</button></a>
                <button class='btn btn-primary me-2'id="finalizarCompra">Finalizar Compra</button>
                <button class="btn btn-danger" id="vaciarCarrito">
                    Vaciar Carrito
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
            </div>
            `;
    body.innerHTML += table;
    const tbody = document.getElementById('tbody')
    for (let i = 0; i < carrito.length; i++) {
        const element = carrito[i];
        const {id, nombre, img, precio, cantidad} = element
        const cart = `
            <tr id=${id}>
                <th><img class='trash' src='./multimedia/trash.png' alt='foto de borrar'></th>
                <th class='detallesTabla'><img class='imgProdCart' src=${img} alt='foto del producto'><span class='nombreProd'>${nombre}</span></th>
                <th>${cantidad}</th>
                <th>$${(cantidad*precio).toLocaleString()}</th>
            </tr>`
            tbody.innerHTML += cart 
    }
    deleteCart = document.getElementById('vaciarCarrito')

deleteCart.onclick = () => {
  carrito = [];
  //vaciar localstorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
  div.innerHTML = ``;
};
finalizarCompra = document.getElementById('finalizarCompra');
finalizarCompra.onclick = ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra',
      })
}

}
