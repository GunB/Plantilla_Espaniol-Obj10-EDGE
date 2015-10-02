/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global EDGE_Plantilla, buscar_sym, detectZoom */

EDGE_Plantilla.btn_navegacion = {
    atras: ["contenedor_home", "btn_regresar"],
    adelante: ["contenedor_home", "btn_adelantar"],
    paginado: ["contenedor_home", "texto_paginado"],
    enviar: ["contenedor_home", "btn_enviar"]
};

$(document).on("EDGE_Plantilla_creationComplete", function (evt) {

    //switch (evt.identify.actividad) {
});

$("body").on("EDGE_Container_loaded", function () {

    $.backstretch("images/r1.png");
    //alert();

    var ele = $(".backstretch");
    ele.empty();
    ele.css({
        "background": "url(images/r1.png) no-repeat center center fixed",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "background-size": "cover"
    });


    var audio = new Audio('media/navigate-begin.mp3');

    //resize1();
    //prevent_scroll($("html"));

    if (EDGE_Plantilla.scorm_available) {
        var suspendData = SCORM_INITIALIZE();
        if (suspendData !== "") {
            EDGE_Plantilla.temp_scorm_suspendData = jQuery.parseJSON(suspendData);
        }
        var interactions = LOAD_INTERACTIONS();
        EDGE_Plantilla.temp_scorm = merge_options(EDGE_Plantilla.temp_scorm, interactions);
    }

    //$(document).trigger("resize");

});

function menu_tools_hide_show(sym) {
    if (sym.$("menu_grafico").is(":visible")) {

        sym.$("menu_grafico").hide();
        sym.$("btn_full").hide();
        sym.$("btn_creditos").hide();
        sym.$("btn_ayuda").hide();
        sym.$("btn_audio").hide();
        sym.$("btn_info").hide();
        sym.$("btn_accesibilidad").hide();
        sym.$("Tool_accesibilidad").hide();
        sym.$("Tool_info").hide();
        sym.$("Tool_full").hide();
        sym.$("Tool_ayuda").hide();
        sym.$("Tool_audio").hide();
        sym.$("Tool_creditos").hide();

    } else {

        sym.$("menu_grafico").show();
        sym.$("btn_full").show();
        sym.$("btn_creditos").show();
        sym.$("btn_ayuda").show();
        sym.$("btn_audio").show();
        sym.$("btn_info").show();
        sym.$("btn_accesibilidad").show();
        sym.$("Tool_accesibilidad").show();
        sym.$("Tool_info").show();
        sym.$("Tool_full").show();
        sym.$("Tool_ayuda").show();
        sym.$("Tool_audio").show();
        sym.$("Tool_creditos").show();
    }
}

$("body").on("EDGE_Self_Plantilla_ClickMenuTools", function (evt) {
    menu_tools_hide_show(evt.sym);
});

$(document).ready(function () {
    //$(window).on('resize', resize);
});

function resize1() {
    var ancho = $("#Stage").width();
    var alto = $("#Stage").height();

    var zoom = detectZoom.zoom();
    var device = detectZoom.device();

    //console.log(zoom, device);

    //console.log("ZOOM LEVEL", device);

    EDGE_Plantilla.zoom = device;

    //<editor-fold defaultstate="collapsed" desc="comment">
    var windowWidth = $(window).width(); //retrieve current window width
    var windowHeight = $(window).height(); //retrieve current window height
    var documentWidth = $(document).width(); //retrieve current document width
    var documentHeight = $(document).height(); //retrieve current document height
    var vScrollPosition = $(document).scrollTop(); //retrieve the document scroll ToP position
    var hScrollPosition = $(document).scrollLeft(); //retrieve the document scroll Left position

    var scale1 = windowWidth / ancho;
    var scale2 = windowHeight / alto;

    var realScale = scale1 > scale2 ? scale2 : scale1;
    //</editor-fold>

    //realScale = realScale * ((device));

    //$().

    //console.log("SCALE LEVEL", realScale);

    /*$("#Stage").css({// Set the transform origin so we always scale to the top left corner of the stage
     "transform-origin": "0% 0%",
     "-ms-transform-origin": "0% 0%",
     "-webkit-transform-origin": "0% 0%",
     "-moz-transform-origin": "0% 0%",
     "-o-transform-origin": "0% 0%"
     });*/

    //$("body").css({height: 0, width: windowWidth});

    /*$("#Stage").css("transform", "scale(" + realScale + ")").css({
     //margin: "0 auto",
     position: "relative"
     }).center(realScale);
     
     console.log("MEDIDAS STAGE ", ancho, alto, scale1, scale2, realScale);*/
}

$("body").on("EDGE_Self_promiseCreating", function (evt) {
    //console.log(evt);
    var page = evt.identify;
    var sym = EDGE_Plantilla.plantilla_sym;

    if (!page.type.startsWith("popup")) {
        //console.log(page, evt.pagina, "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.base_contenedor).play();
        EDGE_Plantilla.id_pagina_actual = evt.pagina;
        page = EDGE_Plantilla.config.paginas[evt.pagina];

        var atras = buscar_sym(sym, EDGE_Plantilla.btn_navegacion.atras, true);
        var adelante = buscar_sym(sym, EDGE_Plantilla.btn_navegacion.adelante, true);
        var paginado = buscar_sym(sym, EDGE_Plantilla.btn_navegacion.paginado, true);
        var enviar = buscar_sym(sym, EDGE_Plantilla.btn_navegacion.enviar, true);

        if (page.type === "actividad") {
            var temp_data = actividad_actual();
            paginado.find("p").text(temp_data.key + 1 + " de " + (EDGE_Plantilla.last_actividad - 1));
        }
        
        if(page.type === "actividad" || page.type === "recurso"){
            $.each(EDGE_Plantilla.button_nav, function (key, val) {
                var borde = $("#Stage_" + val.button + "_borde");
                if (page.plantilla.button === key) {
                    borde.css("background-color", "rgba(255,182,0,1.00)");
                } else {
                    borde.css("background-color", "rgba(204,204,204,1.00)");
                }
            });
        }

        switch (EDGE_Plantilla.id_pagina_actual) {
            case "2":
                atras.hide();
                adelante.show();
                paginado.show();
                enviar.show();
                break;
            case EDGE_Plantilla.last_actividad:
                atras.show();
                adelante.hide();
                paginado.show();
                enviar.show();
                break;
            default:
                switch (page.type) {
                    case "actividad":
                        atras.show();
                        adelante.show();
                        paginado.show();
                        enviar.show();
                        break;
                    case "recurso":
                        atras.hide();
                        adelante.hide();
                        paginado.hide();
                        enviar.hide();
                        break;
                }
                break;
        }
    }

});

function actividad_actual() {
    var str_Id = EDGE_Plantilla.id_pagina_actual;
    var cont = {key: 0, val: 0};
    $.each(EDGE_Plantilla.actividades_cargadas, function (key, val) {
        if (val === str_Id) {
            //mostrar_pagina(EDGE_Plantilla.actividades_cargadas[key - 1]);
            cont = {key: key, val: val};
            return false;
        }
    });
    return cont;
}

function plantilla_atras() {
    mostrar_pagina(EDGE_Plantilla.actividades_cargadas[actividad_actual().key - 1]);
}

function plantilla_adelante() {
    mostrar_pagina(EDGE_Plantilla.actividades_cargadas[actividad_actual().key + 1]);
}

EDGE_Plantilla.actividades_cargadas = [];
EDGE_Plantilla.play_templateButtons = {};

function last_actividad() {
    var last_actividad = "1";
    $.each(EDGE_Plantilla.config.paginas, function (key, val) {
        if (val.type === "actividad") {
            EDGE_Plantilla.actividades_cargadas.push(key);
            var button = val.plantilla.button;

            if (isEmpty(EDGE_Plantilla.play_templateButtons[button])) {
                EDGE_Plantilla.play_templateButtons[button] = [];
            }

            EDGE_Plantilla.play_templateButtons[button].push(val.recurso);

            if (!isNaN(parseInt(key))) {
                last_actividad = key;
            } else {
                return false;
            }
            //play_templateButtons
        }
    });
    EDGE_Plantilla.last_actividad = last_actividad;
}

$(document).on("EDGE_Plantilla_onChange", function (evt) {
    //console.warn(evt);
    //do_submit(EDGE_Plantilla.plantilla_sym);
    $("body").trigger({
        type: "EDGE_Actividad_Submit"
                //sym: sym
    });
});

$("body").on("EDGE_Actividad_Submit", function (evt) {
    var value = EDGE_Plantilla.id_pagina_actual;
    //console.log(value, "ENVIANDO EL SUBMIT");

    var pagina = EDGE_Plantilla.config.paginas[value];
    var stage = EDGE_Plantilla.config.paginas[value].stage;

    //console.log(pagina, stage, "ENVIANDO EL SUBMIT");

    $("iframe", buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.basic_contenedor_name.contenedor, true))[0]
            .contentWindow.$("body").trigger({type: "EDGE_Recurso_Submit", sym: stage});
});

$("body").on("EDGE_Plantilla_postSubmitApplied EDGE_Container_loaded", function (evt) {
    if (isEmpty(EDGE_Plantilla.actividades_cargadas)) {
        last_actividad();
    }

    EDGE_Plantilla.ready_actividades = true;

    //console.log(EDGE_Plantilla.play_templateButtons);

    $.each(EDGE_Plantilla.play_templateButtons, function (key, value) {
        var objbul = true;
        //console.log(EDGE_Plantilla.button_nav[key].button);

        $.each(value, function (k, v) {
            var pagina = EDGE_Plantilla.config.paginas[v];

            var objEvt = {identify: pagina};
            var objResp = get_interactions_by_start(objEvt);
            //console.log(objResp, k, v);
            if (isEmpty(objResp)) {
                objbul = false;
                return false;
            }
        });

        var button = buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.button_nav[key].button, true);
        var fondo = button.find("[id$=boton]");
        fondo.css({
            "background-color": "",
            "background-image": "",
            "background": ""
        });

        var objRojo = {
            "0": "#e85a40", /* Old browsers */
            "1": "-moz-radial-gradient(center, ellipse cover,  #e85a40 18%, #b82f16 80%)", /* FF3.6+ */
            "2": "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(18%,#e85a40), color-stop(80%,#b82f16))", /* Chrome,Safari4+ */
            "3": "-webkit-radial-gradient(center, ellipse cover,  #e85a40 18%,#b82f16 80%)", /* Chrome10+,Safari5.1+ */
            "4": "-o-radial-gradient(center, ellipse cover,  #e85a40 18%,#b82f16 80%)", /* Opera 12+ */
            "5": "-ms-radial-gradient(center, ellipse cover,  #e85a40 18%,#b82f16 80%)", /* IE10+ */
            "6": "radial-gradient(ellipse at center,  #e85a40 18%,#b82f16 80%)", /* W3C */
        };

        var objMorado = {
            "0": "#4f2d6e", /* Old browsers */
            "1": "-moz-radial-gradient(center, ellipse cover,  #4f2d6e 18%, #341054 80%)", /* FF3.6+ */
            "2": "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(18%,#4f2d6e), color-stop(80%,#341054))", /* Chrome,Safari4+ */
            "3": "-webkit-radial-gradient(center, ellipse cover,  #4f2d6e 18%,#341054 80%)", /* Chrome10+,Safari5.1+ */
            "4": "-o-radial-gradient(center, ellipse cover,  #4f2d6e 18%,#341054 80%)", /* Opera 12+ */
            "5": "-ms-radial-gradient(center, ellipse cover,  #4f2d6e 18%,#341054 80%)", /* IE10+ */
            "6": "radial-gradient(ellipse at center,  #4f2d6e 18%,#341054 80%)" /* W3C */
        };

        if (objbul) {
            //fondo.addClass("boton-morado");
            $.each(objMorado, function (k, v) {
                fondo.css({background: v});
            });
        } else {
            EDGE_Plantilla.ready_actividades = false;
            $.each(objRojo, function (k, v) {
                fondo.css({background: v});
            });
        }
    });
    //console.log(EDGE_Plantilla.play_templateButtons);
});

$(document).on("EDGE_Plantilla_RespuestasReady", function (evt) {
    var value = EDGE_Plantilla.id_pagina_actual;
    //console.log(value, "ENVIANDO EL SUBMIT");

    var pagina = EDGE_Plantilla.config.paginas[value];
    var stage = EDGE_Plantilla.config.paginas[value].stage;
    var sym_contenedor = buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
    var objEvt = {
        type: "EDGE_Recurso_Respuestas",
        sym: stage,
        identify: pagina,
        ready: "none"
    };

    if (EDGE_Plantilla.ready_actividades) {
        objEvt = merge_options(objEvt, {
            ready: "confirmar"
        });
    }

    $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
    
    //console.log(EDGE_Plantilla.temp_scorm);
});

$(document).on("EDGE_Plantilla_Terminar", function (evt) {
    var actividades = EDGE_Plantilla.actividades_cargadas;
    EDGE_Plantilla.block = true;
    var cont =0, sum =0;
    var value = EDGE_Plantilla.id_pagina_actual;
    var pagina = EDGE_Plantilla.config.paginas[value];
    var stage = EDGE_Plantilla.config.paginas[value].stage;
    var sym_contenedor = buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
    
    $.each(EDGE_Plantilla.play_templateButtons, function (key, value) {
        var button = buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.button_nav[key].button, true);
        var fondo = button.find("[id$=boton]");
        fondo.css({
            "background-color": "",
            "background-image": "",
            "background": ""
        });
    });

    $.each(EDGE_Plantilla.temp_scorm, function (k, v) {
        cont++;
        //console.log(v);
        if(v.estado === "correct"){
            sum++;
        }
    });
    
    var resp = (sum / cont) * 100;
    
    var objEvt = {
        type: "EDGE_Recurso_Respuestas",
        sym: stage,
        identify: pagina,
        ready: "finale",
        points: resp
    };

    $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
    
    //console.log(resp);
});