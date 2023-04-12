import { productService } from "../Services/product-service.js";


const nuevoProducto = (nombre, precio, imagen, id) =>{

    const card= document.createElement("div")
    const contenido= `

                 <img class="product_img" src="${imagen}" alt="imagen "${nombre}">
                <div class="product_contenido">
                  <h4 class="product_title not-active">${nombre}</h4>
                  <h2>$${precio}MXN</h2>
                  <a href="../editar_producto.html?id=${id}">Editar producto</a>
                  <button id=${id} >Eliminar producto</button>
                </div> `


  card.innerHtml = contenido
  card.dataset.id= id


  return card

}

const productos = document.querySelector("[data-producto]");

const render = async () => {
  try {
    const listaProductos = await productService.productList();
    listaProductos.forEach((elemento) => {
      productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio,elemento.categoria, elemento.imagen, elemento.descripcion, elemento.id));
    })
  } catch (error) {
    console.log(error);
  }
};

render();
