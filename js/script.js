function validarNombre(dato, minimoCaracteres)
        {   
                              
            if(dato.length < minimoCaracteres || /^\s+$/.test(dato))
            {
                return false;   
            }
            else
            {
                return true;
            }
        } 
        
        function validarEmail(dato,minimoCaracteres)
        {            
            if(dato.length < minimoCaracteres || /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/i.test(dato))
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        function validarAsunto(dato, minimoCaracteres)
        {   
                              
            if(dato.length < minimoCaracteres || /^\s+$/.test(dato))
            {
                return false;   
            }
            else
            {
                return true;
            }
        } 
        function validarTextArea(dato, minimoCaracteres)
        {   
                              
            if(dato.length < minimoCaracteres)
            {
                return false;   
            }
            else
            {
                return true;
            }
        }  

        function muestraValidacionNombre()
        {
            var nombre = document.getElementById("IdNombre").value;
            if(validarNombre(nombre, 3))
            {
                document.getElementById("mensaje_nombre").innerHTML="";
            }
            else
            {
                document.getElementById("mensaje_nombre").innerHTML="(*)Campo obligatorio vacío";
            }

        }
        function muestraValidacionEmail()

        {

            var email = document.getElementById("IdEmail").value;
            if(validarEmail(email, 4))
            {
                document.getElementById("mensaje_email").innerHTML="";
            }
            else
            {
                document.getElementById("mensaje_email").innerHTML="(*) Campo obligatorio incorrecto";
            }
        }
        function muestraValidacionAsunto()
        {
            var asunto = document.getElementById("IdAsunto").value;
            if(validarAsunto(asunto, 3))
            {
                document.getElementById("mensaje_asunto").innerHTML="";
            }
            else
            {
                document.getElementById("mensaje_asunto").innerHTML="(*)Campo obligatorio vacío";
            }

        }
        function muestraValidacionTextArea()
        {            
            var textArea = document.getElementById("IdTextArea").value; 
            if(validarTextArea(textArea, 30) == false)
            {
                document.getElementById("mensaje_textarea").innerHTML="(*) El campo obligatorio no tiene valor correcto";
            }
            else
            {
                document.getElementById("mensaje_textarea").innerHTML="";

            }
        }
        function validarFormulario()
        {
            var nombre = document.getElementById("IdNombre").value;
            var email = document.getElementById("IdEmail").value;
            var asunto = document.getElementById("IdAsunto").value;
            var textArea = document.getElementById("IdTextArea").value;
            
            if((validarNombre(nombre, 3)) && (validarEmail(email, 4)) && (validarAsunto(asunto, 3)) && (validarTextArea(textArea, 30)))
            {
                return true;
            }
            else
            {
                return false;
            }   
        }