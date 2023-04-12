
// Función para crear una estructura article para mostrar los productos
export const createLineUserView = (nombre, precio, imagen) => {
  const line = document.createElement('div')
  line.classList.add('product')

  const content = 
  

  `
  <img class="product_img" src="${imagen}" alt="imagen "${nombre}">
  <div class="product_contenido">
    <h4 class="product_title not-active">${nombre}</h4>
    <h2>$${precio}MXN</h2>
    <h3>Ver producto</h2>
  </div>
                    
    
                   
  
  
  `

  line.innerHTML = content

  return line
}
