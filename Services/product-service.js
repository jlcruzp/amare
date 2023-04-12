//GET
const productList = () =>
  fetch("http://localhost:3000/product")
    .then((res) => res.json())
    .catch((error) => console.log(error));


// Crear un producto

const createProduct = (nombre, precio, categoria, imagen, descripcion) => {
  fetch('http://localhost:3000/product', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ 
      nombre, 
      precio, 
      categoria, 
      imagen, 
      descripcion,
      id: uuid.v4() })
  }).then(respuesta=>{
    if(respuesta){
      return respuesta
    }

  })
  throw new error("No se pudo generar producto, intenta más tarde.")
}

// Eliminar un producto
const deleteProduct = (id) => {
  return fetch(`http://localhost:3000/product/${id}`, {
    method: 'DELETE'
  })
}

// Obtener el detalle de un producto
const productDetail = (id) => {
  return fetch(`http://localhost:3000/product/${id}`).then(res => res.json())
}

// Actualizar un producto
const updateProduct = (nombre, precio, categoria, imagen, descripcion, id) => {
  return fetch(`http://localhost:3000/product/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ nombre, precio, categoria, imagen, descripcion})
  }).then(res => res)
    .catch(error => console.log(error))
}

// Obtener una cantidad limitada de productos

const getLimitProduct = () => {
  return fetch('http://localhost:3000/product?_limit=4').then(res => res.json())
}

export const productService = {
  productList,
  createProduct,
  deleteProduct,
  productDetail,
  updateProduct,
  getLimitProduct
}
