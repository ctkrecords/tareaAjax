/*
https://mini-shop-rg.herokuapp.com/products
Se debe mostrar nombre del producto, precio, imagen, descripción

<div class="card" style="width: 18rem;">
  <img src="..." class='card-img-top' alt='...'>
  <div class='card-body'>
    <p class='card-text'></p>
  </div>
</div>

*/
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://mini-shop-rg.herokuapp.com/products",
        success: function (resultado) {
            //console.log(resultado);
            var collectionProducts = resultado;
            var listarProductos = $("#listar-productos");
            for(var i=0;i<collectionProducts.length;i++){
                var prod = collectionProducts[i];
                listarProductos.append(
                    "<div class='card row bg-dark text-white' style='width: 18rem;'>"
                    + "<img src=" + prod.image + " class='card-img-top' alt='...'>"
                    + "<div class='card-body'>"
                    + "<p class='card-text'><strong>Nombre: </strong>" + prod.name + "</p>"
                    + "<p class='card-text'><strong>Precio:</strong>  $" + prod.price + "</p>"
                    + "<p class='card-text'><strong>Descripción: </strong>" + prod.description + "</p>"
                    + "</div>"
                    + "</div><br>"
                );
            }
        },
        error: function(resultado){
            console.log("fallo!");
        },
        complete: function(resultado){
            console.log("respuesta completada");
        }
    }); 
});


    

