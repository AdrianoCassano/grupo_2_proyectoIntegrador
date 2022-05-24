console.log("ES POR ACA")
window.addEventListener('load', function (){

    let form = document.querySelector('.register-form');

    form.addEventListener('submit', function(e){


        let errores = [];


        let campoNombre = document.getElementById('nombre');

        if(campoNombre.value ==""){
            errores.push('El nombre es obligatorio')

        }else if (campoNombre.value.length < 2){
            errores.push ('El nombre debe tener mínimo 2 caracteres')
        }

        let campoApellido = document.getElementById('Apellido');

        if(campoApellido.value ==""){
            errores.push('El apellido es obligatorio')      
        }else if (campoApellido.value.length < 2){
            errores.push ('El apellido debe tener mínimo 2 caracteres')
        }



        let campoEmail = document.getElementById('Email');

        let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/



        if(campoEmail.value==""){
            errores.push('El email es obligatorio')  

        }
        else if (!regexEmail.test(campoEmail.value)) {
            errores.push('El formato no es del tipo email')
            return false 


        }


        let campoPassword = document.getElementById('Contraseña');

        if(campoPassword.value ==""){
            errores.push('El Password es obligatorio')      
        }else if (campoPassword.value.length < 8){
            errores.push ('El Password debe tener mínimo 8 caracteres')
        }

        let image = document.getElementById('Imagen');

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
    
})
})