
//document.getElementsByName("btnnueva").addEventListener({})

function ruta(url){
    location.href=url
}

$("#btn-iniciar").on("click",()=>{
    //$("#btnnueva").fadeOut(5000)
    //$("#form_login").submit()
})

$("#btnnueva").on("click",()=>{
    ruta("newaccount.html")
})

$("#form_login").on("submit",(e)=>{
    e.preventDefault();
    //alert("ON Submit del Formulario");
    let nom_usu=$("#correo").val()
    let pass_usu=$("#contrasena").val()
    //let data = $("#form_login").serialize()
    if(nom_usu!="" && pass_usu!=""){
        let info = {
            "user":nom_usu,
            "pass":pass_usu
        }
        //alert("ok --- inicia Ajax")
        //Aplicando tecnica de Ajax
        $.ajax({
            data: info,
            url: "../control/login.php",
            type: "GET",
            beforeSend:()=>{
                console.log("Procesando la peticion...")
            }
        }).done((resp)=>{
            $("#div-msg1").html(resp)
        })
        //Fin Ajax

        //Aplicando el metodo de Fetch
        const div = document.getElementById('div-msg2')
        fetch("../control/login.php?user="+nom_usu+"&pass="+pass_usu,info).then((resp)=>{div.innerHTML += resp.json()})   
        //Fin Fetch
        //fetch("../control/login.php",info).then((resp)=>resp.json()).then((dataj)=>{
            //div.innerHTML += dataj[0]
        //})

        //alert("Datos ha enviar\n\n"+data)
        //return false
    }else{
        alert("Ingrese la informacion requerida")
        //alert("Datos ha enviar\n\nUsuario: "+nom_usu+"\nContraseña: "+pass_usu)
        $("#correo").focus()
    }
    //alert("Datos ha enviar\n\nUsuario: "+nom_usu+"\nContraseña: "+pass_usu)
    //ruta("../control/login.php")
   
    //Ajax
})

//Cuando en Js de la pagina este listo se aplica el siguiente codigo
$(()=>{
    
    $("#title").slideUp(1000).show("slow")
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