import { productService } from "../Services/product-service.js";


 // Para agregar un producto
const form = document.querySelector('[data-form]')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const imagen = document.querySelector('[data-tipo="url"]').value
  const nombre = document.querySelector('[data-tipo="nombreProducto"]').value
  const precio = document.querySelector('[data-tipo="price"]').value
  const categoria = document.querySelector('[data-tipo="category"]').value
  const descripcion = document.querySelector('[data-tipo="description"]').value
  try {
    await productService.createProduct( nombre, precio, categoria.toLowerCase(), imagen, descripcion)
    .then(() => {
      window.location.href = '../all_products_admin.html'
    })
  } catch (error) {
    console.log(error)
      window.location.href = '../all_products_admin.html'
      }
})