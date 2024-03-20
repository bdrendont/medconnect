
//document.getElementsByName("btnnueva").addEventListener({})

function ruta(url){
    location.href=url
}

$("#btn-iniciar").on("click",()=>{
    $("#form_login").submit()
})

$("#btnnueva").on("click",()=>{
    ruta("newaccount.html")
})

$("#form_login").on("submit",()=>{
    //alert("ON Submit del Formulario");
    let data = $("#form_login").serialize()
    alert("Datos ha enviar\n\n"+data)
    ruta("../control/login.php")
    return false
    //Ajax
})
//$(".botoninicio").fadeOut()