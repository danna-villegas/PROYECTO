async function obtenerProductos(){
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    if(!response.ok){ // si no hay respuesta
      throw new Error('Error al obtener productos')
    }
    const data = await response.json();
    console.log(data);
    return data;
  }catch(error){ 
    console.error('Error:' , error);
    return[];
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.querySelector(".contenedor")
  const products = await obtenerProductos();
  let productos= "";
  console.log(products);
  products.forEach( product => {
    localStorage.setItem(`product_${product.id})` , JSON.stringify(product));
      productos += `
  
      <div class="card" style="width: 18rem;">
              <img src="${product.image}"  style="width" class="card-image-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-tittle">${product.title}</h5>
                  <p class="card-text">${product.price}</p>
                  <a href="detalleproducto.html?id=${product.id}" class="btn btn-primary">Ver detalle</a>
              </div>
      </div>
     
      ` // ` BACKTICK
  }); //foreach
  contenedor.innerHTML = productos;
}) //AddEventListener 
