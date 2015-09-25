/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Insertar código para ejecutarse cuando el símbolo se crea aquí
         
         inicializarPickMany(sym);

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${PICK_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_1}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_1";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_1}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_1";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_2";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_2";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_3}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_3";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_4";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${PICK_3}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_3";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_4";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${PICK_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_4");

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Definir un conmutador para reproducir o pausar una pista de audio 
         var numeroAudio = 1;
         var cantidadDeAudios = 1; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_3}", "click", function(sym, e) {
         sym.$("zoom_3").show();
         sym.$("lupa_3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_2}", "click", function(sym, e) {
         sym.$("zoom_2").show();
         sym.$("lupa_2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_1}", "click", function(sym, e) {
         sym.$("zoom_1").show();
         sym.$("lupa_1").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.$("zoom_4").show();
         sym.$("lupa_4").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'TIMER_CONTAINER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("TIMER_CONTAINER");
   //Edge symbol end:'TIMER_CONTAINER'

   //=========================================================
   
   //Edge symbol: 'Submit_1'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

   //=========================================================
   
   //Edge symbol: 'PICK_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_1");
   //Edge symbol end:'PICK_1'

   //=========================================================
   
   //Edge symbol: 'PICK_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_2");
   //Edge symbol end:'PICK_2'

   //=========================================================
   
   //Edge symbol: 'PICK_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

   })("PICK_3");
   //Edge symbol end:'PICK_3'

   //=========================================================
   
   //Edge symbol: 'PICK_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

   })("PICK_4");
   //Edge symbol end:'PICK_4'

   //=========================================================
   
   //Edge symbol: 'margenes'
   (function(symbolName) {   
   
   })("margenes");
   //Edge symbol end:'margenes'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'btn_audio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_1")[0].pause();
         sym.$("audiomp3_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8348, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_1");
   //Edge symbol end:'audio_1'

   //=========================================================
   
   //Edge symbol: 'zoom_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa_3").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa_3").show();

      });
      //Edge binding end

   })("zoom_3");
   //Edge symbol end:'zoom_3'

   //=========================================================
   
   //Edge symbol: 'cerrar_lupa'
   (function(symbolName) {   
   
   })("cerrar_lupa");
   //Edge symbol end:'cerrar_lupa'

   //=========================================================
   
   //Edge symbol: 'zoom_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa_2").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa_2").show();

      });
      //Edge binding end

   })("zoom_2");
   //Edge symbol end:'zoom_2'

   //=========================================================
   
   //Edge symbol: 'zoom_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa_1").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa_1").show();

      });
      //Edge binding end

   })("zoom_1");
   //Edge symbol end:'zoom_1'

   //=========================================================
   
   //Edge symbol: 'lupa'
   (function(symbolName) {   
   
   })("lupa");
   //Edge symbol end:'lupa'

   //=========================================================
   
   //Edge symbol: 'zoom_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa_4").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa_4").show();

      });
      //Edge binding end

   })("zoom_4");
   //Edge symbol end:'zoom_4'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17298671");