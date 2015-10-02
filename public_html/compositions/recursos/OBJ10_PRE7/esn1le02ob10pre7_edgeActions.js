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

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_2");

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
         var numeroAudio = 1;
         var cantidadDeAudios = 4; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 2;
         var cantidadDeAudios = 4; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 3;
         var cantidadDeAudios = 4; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 4;
         var cantidadDeAudios = 4; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_1}", "click", function(sym, e) {
         sym.$("zoom_1").show();
         sym.$("lupa_1").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'PICK_4_1'
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
   
   //Edge symbol: 'PICK_3_1'
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
   
   //Edge symbol: 'PICK_2_1'
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
   
   //Edge symbol: 'PICK_1_1'
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
   
   //Edge symbol: 'audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r10_audio_1")[0].pause();
         sym.$("r10_audio_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3479, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_1");
   //Edge symbol end:'audio_1'

   //=========================================================
   
   //Edge symbol: 'audio_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r10_audio_2")[0].pause();
         sym.$("r10_audio_2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3505, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_2");
   //Edge symbol end:'audio_2'

   //=========================================================
   
   //Edge symbol: 'audio_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r10_audio_3")[0].pause();
         sym.$("r10_audio_3")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3583, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_3");
   //Edge symbol end:'audio_3'

   //=========================================================
   
   //Edge symbol: 'audio_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r10_audio_4")[0].pause();
         sym.$("r10_audio_4")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2905, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_4");
   //Edge symbol end:'audio_4'

   //=========================================================
   
   //Edge symbol: 'zoom_1_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa_1").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa_1").show();
         
         

      });
      //Edge binding end

   })("zoom_1");
   //Edge symbol end:'zoom_1'

   //=========================================================
   
   //Edge symbol: 'cerrar_lupa'
   (function(symbolName) {   
   
   })("cerrar_lupa");
   //Edge symbol end:'cerrar_lupa'

   //=========================================================
   
   //Edge symbol: 'lupa_1'
   (function(symbolName) {   
   
   })("lupa_1");
   //Edge symbol end:'lupa_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17298671");