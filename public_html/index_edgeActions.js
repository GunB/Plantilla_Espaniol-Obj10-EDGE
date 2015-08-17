/***********************
 * Acciones de composición de Adobe Edge Animate
 *
 * Editar este archivo con precaución, teniendo cuidado de conservar 
 * las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
 * capacidad de interactuar con estas acciones en Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

    //Edge symbol: 'stage'
    (function (symbolName) {


        Symbol.bindElementAction(compId, symbolName, "${btn_menugrafico}", "click", function (sym, e) {
            // muestra/oculta menu grafico

            if (sym.$("menu_grafico").is(":visible")) {

                sym.$("menu_grafico").hide();
                sym.$("btn_full").hide();
                sym.$("btn_creditos").hide();
                sym.$("btn_ayuda").hide();
                sym.$("btn_audio").hide();
                sym.$("btn_info").hide();
                sym.$("btn_accesibilidad").hide()
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

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_audio").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_audio").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_full}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_full").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_ayuda").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_creditos").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_info").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_accesibilidad").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_full}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_full").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_ayuda").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_creditos").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_info").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_accesibilidad").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
            $("body").trigger({
                type: "EDGE_Container_loaded",
                sym: sym
            });
            // Ocultar un elemento 
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


            sym.$("tool_empecemos").hide();
            sym.$("toolr_2").hide();
            sym.$("toolr_3").hide();
            sym.$("toolr_4").hide();
            sym.$("toolr_5").hide();
            sym.$("toolr_6").hide();
            sym.$("tool_resultados").hide();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_1}", "mouseout", function (sym, e) {
            sym.$("tool_empecemos").hide();
            sym.getSymbol("tool_empecemos").play("a");
            sym.getSymbol("btnr_1").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_1}", "mouseover", function (sym, e) {
            sym.$("tool_empecemos").show();
            sym.getSymbol("tool_empecemos").play("b");
            sym.getSymbol("btnr_1").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_2}", "mouseout", function (sym, e) {
            sym.$("toolr_2").hide();
            sym.getSymbol("toolr_2").play("a");
            sym.getSymbol("btnr_2").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_2}", "mouseover", function (sym, e) {
            sym.$("toolr_2").show();
            sym.getSymbol("toolr_2").play("b");
            sym.getSymbol("btnr_2").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_3}", "mouseout", function (sym, e) {
            sym.$("toolr_3").hide();
            sym.getSymbol("toolr_3").play("a");
            sym.getSymbol("btnr_3").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_4}", "mouseout", function (sym, e) {
            sym.$("toolr_4").hide();
            sym.getSymbol("toolr_4").play("a");
            sym.getSymbol("btnr_4").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_5}", "mouseout", function (sym, e) {
            sym.$("toolr_5").hide();
            sym.getSymbol("toolr_5").play("a");
            sym.getSymbol("btnr_5").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_6}", "mouseout", function (sym, e) {
            sym.$("toolr_6").hide();
            sym.getSymbol("toolr_6").play("a");
            sym.getSymbol("btnr_6").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_7}", "mouseout", function (sym, e) {
            sym.$("tool_resultados").hide();
            sym.getSymbol("tool_resultados").play("a");
            sym.getSymbol("btnr_7").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_3}", "mouseover", function (sym, e) {
            sym.$("toolr_3").show();
            sym.getSymbol("toolr_3").play("b");
            sym.getSymbol("btnr_3").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_4}", "mouseover", function (sym, e) {
            sym.$("toolr_4").show();
            sym.getSymbol("toolr_4").play("b");
            sym.getSymbol("btnr_4").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_5}", "mouseover", function (sym, e) {
            sym.$("toolr_5").show();
            sym.getSymbol("toolr_5").play("b");
            sym.getSymbol("btnr_5").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_6}", "mouseover", function (sym, e) {
            sym.$("toolr_6").show();
            sym.getSymbol("toolr_6").play("b");
            sym.getSymbol("btnr_6").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_7}", "mouseover", function (sym, e) {
            sym.$("tool_resultados").show();
            sym.getSymbol("tool_resultados").play("b");
            sym.getSymbol("btnr_7").play("b");
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_1}", "click", function (sym, e) {
            cambiarColorBordes(sym, 1);
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_2}", "click", function (sym, e) {
            cambiarColorBordes(sym, 2);
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_3}", "click", function (sym, e) {
            cambiarColorBordes(sym, 3);
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_4}", "click", function (sym, e) {
            cambiarColorBordes(sym, 4);
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_5}", "click", function (sym, e) {
            cambiarColorBordes(sym, 5);
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_6}", "click", function (sym, e) {
            cambiarColorBordes(sym, 6);
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_7}", "click", function (sym, e) {
            cambiarColorBordes(sym, 7);
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });
        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_full}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'overlay'
    (function (symbolName) {

    })("overlay");
    //Edge symbol end:'overlay'

    //=========================================================

    //Edge symbol: 'container_overlay'
    (function (symbolName) {

    })("container_overlay");
    //Edge symbol end:'container_overlay'

    //=========================================================

    //Edge symbol: 'titulo'
    (function (symbolName) {

    })("titulo");
    //Edge symbol end:'titulo'

    //=========================================================

    //Edge symbol: 'btn_sena'
    (function (symbolName) {

    })("btn_sena");
    //Edge symbol end:'btn_sena'

    //=========================================================

    //Edge symbol: 'ruta'
    (function (symbolName) {

    })("ruta");
    //Edge symbol end:'ruta'

    //=========================================================

    //Edge symbol: 'btn_accesibilidad'
    (function (symbolName) {

    })("btn_accesibilidad");
    //Edge symbol end:'btn_accesibilidad'

    //=========================================================

    //Edge symbol: 'btn_info'
    (function (symbolName) {

    })("btn_info");
    //Edge symbol end:'btn_info'

    //=========================================================

    //Edge symbol: 'btn_creditos'
    (function (symbolName) {

    })("btn_creditos");
    //Edge symbol end:'btn_creditos'

    //=========================================================

    //Edge symbol: 'btn_ayuda'
    (function (symbolName) {

    })("btn_ayuda");
    //Edge symbol end:'btn_ayuda'

    //=========================================================

    //Edge symbol: 'btn_full'
    (function (symbolName) {

    })("btn_full");
    //Edge symbol end:'btn_full'

    //=========================================================

    //Edge symbol: 'btn_audio'
    (function (symbolName) {

    })("btn_audio");
    //Edge symbol end:'btn_audio'

    //=========================================================

    //Edge symbol: 'Tool_accesibilidad'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_accesibilidad");
    //Edge symbol end:'Tool_accesibilidad'

    //=========================================================

    //Edge symbol: 'Tool_info'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_info");
    //Edge symbol end:'Tool_info'

    //=========================================================

    //Edge symbol: 'Tool_full'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_full");
    //Edge symbol end:'Tool_full'

    //=========================================================

    //Edge symbol: 'Tool_ayuda'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_ayuda");
    //Edge symbol end:'Tool_ayuda'

    //=========================================================

    //Edge symbol: 'Tool_audio'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_audio");
    //Edge symbol end:'Tool_audio'

    //=========================================================

    //Edge symbol: 'Tool_creditos'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_creditos");
    //Edge symbol end:'Tool_creditos'

    //=========================================================

    //Edge symbol: 'menu_grafico'
    (function (symbolName) {

    })("menu_grafico");
    //Edge symbol end:'menu_grafico'

    //=========================================================

    //Edge symbol: 'btn_menugrafico'
    (function (symbolName) {

    })("btn_menugrafico");
    //Edge symbol end:'btn_menugrafico'

    //=========================================================

    //Edge symbol: 'overlay_portada'
    (function (symbolName) {

    })("overlay_portada");
    //Edge symbol end:'overlay_portada'

    //=========================================================

    //Edge symbol: 'contenedor_home'
    (function (symbolName) {

    })("contenedor_home");
    //Edge symbol end:'contenedor_home'

    //=========================================================

    //Edge symbol: 'back_contenedor_home'
    (function (symbolName) {

    })("back_contenedor_home");
    //Edge symbol end:'back_contenedor_home'

    //=========================================================

    //Edge symbol: 'btn_r1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_2");
    //Edge symbol end:'btnr_2'

    //=========================================================

    //Edge symbol: 'tool_r1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("toolr_2");
    //Edge symbol end:'toolr_2'

    //=========================================================

    //Edge symbol: 'tool_empecemos'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("tool_empecemos");
    //Edge symbol end:'tool_empecemos'

    //=========================================================

    //Edge symbol: 'btn_inicio'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_1");
    //Edge symbol end:'btnr_1'

    //=========================================================

    //Edge symbol: 'tool_empecemos_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("tool_resultados");
    //Edge symbol end:'tool_resultados'

    //=========================================================

    //Edge symbol: 'btnr_3'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_7");
    //Edge symbol end:'btnr_7'

    //=========================================================

    //Edge symbol: 'btnr_3'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_3");
    //Edge symbol end:'btnr_3'

    //=========================================================

    //Edge symbol: 'toolr_2'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("toolr_3");
    //Edge symbol end:'toolr_3'

    //=========================================================

    //Edge symbol: 'toolr_3'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("toolr_4");
    //Edge symbol end:'toolr_4'

    //=========================================================

    //Edge symbol: 'toolr_4'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("toolr_5");
    //Edge symbol end:'toolr_5'

    //=========================================================

    //Edge symbol: 'toolr_5'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("toolr_6");
    //Edge symbol end:'toolr_6'

    //=========================================================

    //Edge symbol: 'btnr_4'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_4");
    //Edge symbol end:'btnr_4'

    //=========================================================

    //Edge symbol: 'btnr_5'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_5");
    //Edge symbol end:'btnr_5'

    //=========================================================

    //Edge symbol: 'btnr_6'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_6");
    //Edge symbol end:'btnr_6'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9139205");