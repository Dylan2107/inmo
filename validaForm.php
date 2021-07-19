<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
if ($_POST['g-recaptcha-response'] == '') {
echo "Captcha invalido";
} else {
$obj = new stdClass();
$obj->secret = "6LfZ8ZkbAAAAALV2EF0BhjCpgn9cdwXo53MXDlXL";
$obj->response = $_POST['g-recaptcha-response'];
$obj->remoteip = $_SERVER['REMOTE_ADDR'];
$url = 'https://www.google.com/recaptcha/api/siteverify';

$options = array(
'http' => array(
'header' => "Content-type: application/x-www-form-urlencoded\r\n",
'method' => 'POST',
'content' => http_build_query($obj)
)
);
$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

$validar = json_decode($result);
}
$swEsCorrecto=true;

    if((isset($_POST['nombre']) && 
    validarNombre($_POST['nombre'], 3) == true) )
    {
        printf("<h3>Tu nombre es %s</h3>",$_POST['nombre']);
    }
    else
    {
        printf("<h3>El campo Nombre es incorrecto</h3>");
        $swEsCorrecto=false;
    }

    if((isset($_POST['email']) &&
    validarEmail($_POST['email'],9) == true) )
    {
        printf("<h3>Tu email es %s</h3>",$_POST['email']);
    }
    else
    {
        printf("<h3>El campo email es incorrecto</h3>");
        $swEsCorrecto=false;
    }
    if((isset($_POST['asunto']) && 
    validarAsunto($_POST['asunto'], 3) == true) )
    {
        printf("<h3>El sunto es %s</h3>",$_POST['asunto']);
    }
    else
    {
        printf("<h3>El campo asunto es incorrecto</h3>");
        $swEsCorrecto=false;
    }
    if((isset($_POST['textArea']) && 
    validartextArea($_POST['textArea'], 3) == true) )
    {
        printf("<h3>El área de texto es %s</h3>",$_POST['textArea']);
    }
    else
    {
        printf("<h3>El campo área de texto es incorrecto</h3>");
        $swEsCorrecto=false;
    }
    if(isset($_POST['acepto']) && $_POST['acepto']!="")
    {
        printf("<h3>Aceptas %s</h3>",$_POST['acepto']);
    }
    else
    {
        printf("<h3>El campo aceptas no está seleccionado</h3>");
        $swEsCorrecto=false;
    }

    if($swEsCorrecto == true)
    {
        printf("<h1>El formulario es correcto</h1>");
    }
    else
    {
        printf("<h1>Oops!!!, algo está mal</h1>");
    }
?>
</body>
</html>