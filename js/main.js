
//document.getElementsByName("btnnueva").addEventListener({})

function ruta(url){
    location.href=url
}

$("#btn-iniciar").on("click",()=>{
    $("#btnnueva").fadeOut(5000)
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

//Cuando en Js de la pagina este listo se aplica el siguiente codigo
$(()=>{
    
    $("#title").slideUp(1000).fadeIn(1000).toggle("slow").show("slow")
    $(".boton").mousedown(()=>{
        alert("Mas información")
    })
    //let titulo = $(".div-60").text()
    //alert(titulo)
    //$("#btn-iniciar").html("Ingresar").css({'color':'black', 'font-size': '1.2em', 'width': '100%'})
    //$("#btnnueva").addClass("botoninicio")
    //$("#btn-iniciar").hide(5000).delay(1000).show(2000);
    //$("#btn-iniciar").toggle(2000)
    $("#correo").attr({'placeholder':"E-mail"}).delay(1000)
    $("#btn-iniciar").slideUp(300).delay(800).fadeIn(400);
    $("#correo").change(()=>{
        $("#correo").val($("#correo").val().toLowerCase())
        if($("#correo").length>0){
            $("#correo").css({'color':'green'})
        }else {$("#correo").css({'color':'black'})}
    })
    //$("#correo").css({'border': '100cap','border-color':'green', 'border-bottom':'3px'})
    $("#correo").focus(()=>{
        $("#correo").addClass("focus").fadeIn("slow")
    })

    $("#correo").focusout(()=>{
        $("#correo").removeClass("focus")
    })

})

//$(".botoninicio").fadeOut()