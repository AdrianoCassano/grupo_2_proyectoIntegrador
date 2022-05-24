window.addEventListener("load" ,function(){
   
    let productos = JSON.parse(sessionStorage.getItem("pc"))
  
  
  
  
  
  
  //agregando Data desde session
  const carro = document.getElementById("carro")
  let tabla = '';
  if(productos === null ){
      alert("Carrito Vacio.")
      
  }else{
  productos.map(data=>{
      tabla +='<article><div class="imagen"><img src='+data.prodImg+' id="imagen-art"></div><div class="description"><p id="title">'+data.name+'</p> <p>'+data.descripcion+' </p></div><p id="precio-art">'+data.precio+'</p><div id="cant-art"><a href="#" class="qty">-</a><input type="number" value="'+data.qty+'"id="value-cant" /><a href="#" class="qty">+</a></div><button onclick=Delete(this) class="eliminar">X</button></article>' 

  });
  
  }
  
  
  
  carro.innerHTML = tabla;
  
  
  
    //Valor Total
    let total = 0;
    const carritoTotal = document.querySelector("#total-monto")
  productos.map(data=>{
  const precio = parseInt(data.precio.replace("$",""))
  
  
  total = total + precio*data.qty
  })
  carritoTotal.innerHTML ="$"+total;
});