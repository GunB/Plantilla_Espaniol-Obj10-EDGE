/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function buscar_sym(sym, arrSymSearch, boolJQUERY) {
    var temp = sym;
    $.each(arrSymSearch, function (index, value) {
        //EDGE_Plantilla.debug ? console.log(temp, index, value, arrSymSearch) : false;

        if (!isEmpty(boolJQUERY) && index === arrSymSearch.length - 1) {
            temp = temp.$(value);
        } else {
            temp = temp.getSymbol(value);
        }

    });
    //EDGE_Plantilla.debug ? console.log(temp, arrSymSearch, boolJQUERY) : false;
    return temp;
}

$("body").on("EDGE_Recurso_promiseCreated", function (evt) {
    enviarEventoCambio();
});

$("body").on("EDGE_Recurso_Respuestas", function (evt) {
    switch (evt.ready){
        case "none":
            //evt.sym.play("confirmacion");
            break;
        case "confirmar":
            evt.sym.play("confirmacion");
            break;
        case "finale":
            evt.sym.play("finale");
            var porc = parseInt(evt.points);
            var sec = (( (5 * porc) / 100) * 1000);
            //console.log(sec, porc, evt.points);
            evt.sym.getSymbol("respuesta_3").getSymbol("indicador").stop(sec);
            var text = evt.sym.getSymbol("respuesta_3").$("texto_porcentaje");
            text.find("p").html(porc + "%");
            //var medidor = buscar_sym(evt.sym, ["respuesta_3", "indicador"]);
            //medidor.play();
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