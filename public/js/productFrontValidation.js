console.log("ES POR ACA")
window.addEventListener('load', function (){

    let form = document.querySelector('.register-form');

    form.addEventListener('submit', function(e){
       
        
        let errores = [];
        
        let campoNombre = document.querySelector('#nombre');
        
        if(campoNombre.value ===""){
            errores.push('El nombre del producto es obligatorio')  
            
        }else if (campoNombre.value.length < 6){
            errores.push ('El nombre debe tener mínimo 5 caracteres')
        }
        
        let campoDescripcion = document.querySelector('#descripcion');
        
        if(campoDescripcion.value ===""){
            errores.push('la descripcion del producto es obligatoria')
        }else if (campoDescripcion.value.length < 21){
            errores.push ('La descripcion debe tener mínimo 20 caracteres');    
        }

        let image = document.querySelector('#productImg');

        if (image.value) {
            
            fileName = image.value;
            idxDot = fileName.lastIndexOf(".") + 1,
            extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
            if (!(extFile == "jpg" || extFile == "jpeg" || extFile == "png")){
                errores.push('Debe cargar una imagen en formato jpg/jpeg/png')
            }
        };

        if (errores.length >0){
            e.preventDefault();
            let  ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML= "";
            for (let i = 0; i < errores.length; i++) { 
                ulErrores.innerHTML +="<li>" + errores[i]+ "</li>"
            }
        }else{
            form.submit();
        }
        
});



    
})