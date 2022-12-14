function cargarPagina(){
    $("#formularioLabelError1").hide();
    $("#formularioLabelError2").hide();
    

}

function verificar(){
    let nombre = $("#nombre").val();
    let telefono = $("#telefono").val();

    if(nombre.length<3 || isNaN(nombre)==false){
        $("#formularioLabelError1").show();
        $("#nombre").css("border","1px solid red")
        
    }else{
        $("#formularioLabelError1").hide();
        $("#nombre").css("border","1px solid red")
    }

    if(telefono.length!=10 ){
        $("#formularioLabelError2").show();
        $("#telefono").css("border","1px solid red")
    }else{
        $("#formularioLabelError2").hide();
        $("#apellido").css("border","1px solid red")
    }
    
}