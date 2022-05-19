console.log("ES LOGIN")
window.addEventListener('load', function (){

    let form = document.querySelector('.login-form');

    form.addEventListener('submit', function(e){
       
        
        let errores = [];
        
        let campoEmail = document.querySelector('#username');

        let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        
        if(campoEmail.value ===""){
            errores.push('El email es  obligatorio')  
        
        }
        else if (!regexEmail.test(campoEmail.value)) {
            errores.push('El formato no es del tipo email')
            return false 


        }


        let campoPassword = document.querySelector('#password');

        if(campoPassword.value ===""){
            errores.push('El Password es obligatorio')      
        }else if (campoPassword.value.length < 8){
            errores.push ('El Password debe tener mínimo 8 caracteres')
        }

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