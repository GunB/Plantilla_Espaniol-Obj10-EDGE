/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("body").on("EDGE_Recurso_promiseCreated", function (evt) {
    enviarEventoCambio();
    console.warn(evt);
});

$("body").on("EDGE_Recurso_Respuestas", function (evt) {
    switch (evt.ready){
        case "none":
            //evt.sym.play("confirmacion");
            break;
        case "confirmacion":
            evt.sym.play("confirmacion");
            break;
    }
});

function enviarEventoCambio() {
    //var stage = $(sym.getComposition().getStage().ele);
    parent.$(parent.document).trigger({
        type: "EDGE_Plantilla_RespuestasReady"
        //identify: stage.prop("ed_identify"),
    });
}

function confirmar(){
    parent.$(parent.document).trigger({
        type: "EDGE_Plantilla_Terminar"
        //identify: stage.prop("ed_identify"),
    });
}