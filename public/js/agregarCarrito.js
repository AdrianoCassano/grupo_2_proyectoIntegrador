window.onload=function(){
    var productosCarrito = [];
    
    var nuevoProducto = new Object();
    nuevoProducto.name = document.getElementById('name').innerText
    nuevoProducto.precio = document.getElementById('precio').innerText
    nuevoProducto.prodImg = document.getElementById('prdImg').src
    nuevoProducto.descripcion = document.getElementById('descripcion').innerText
    nuevoProducto.qty = document.getElementById('qty').value
   
   var cartBtn= document.getElementById("cartBtn")
   
       cartBtn.onclick = function(){
        
          if(JSON.parse(sessionStorage.getItem("pc")) === null ){
              productosCarrito.push(nuevoProducto);
              sessionStorage.setItem('pc',JSON.stringify(productosCarrito))
              window.location.reload();
           }else{
               const array = JSON.parse(sessionStorage.getItem("pc"))
               array.map(data=>{
                   if(nuevoProducto.name == data.name){
                       nuevoProducto.qty = data.qty + 1;
                   }
                   else{
                       productosCarrito.push(data);
                   }
               });
               productosCarrito.push(nuevoProducto);
               sessionStorage.setItem('pc',JSON.stringify(productosCarrito))
               window.location.reload();
               
   
           }
   
   
   
   alert("Producto añadido al carro")
   
   
       };
   
   
   };