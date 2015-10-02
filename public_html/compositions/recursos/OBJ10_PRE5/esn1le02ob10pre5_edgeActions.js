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
         inicializarDragAndDrop(sym);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${DRAG_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 1;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DRAG_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 4;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DRAG_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 3;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DRAG_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 2;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DRAG_5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 5;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DRAG_6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 6;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'DROP_1'
   (function(symbolName) {   
   
   })("DROP_1");
   //Edge symbol end:'DROP_1'

   //=========================================================
   
   //Edge symbol: 'DROP_2'
   (function(symbolName) {   
   
   })("DROP_2");
   //Edge symbol end:'DROP_2'

   //=========================================================
   
   //Edge symbol: 'audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("r5_audio_1")[0].pause();
         sym.$("r5_audio_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2619, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_1");
   //Edge symbol end:'audio_1'

   //=========================================================
   
   //Edge symbol: 'audio_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("r5_audio_4")[0].pause();
         sym.$("r5_audio_4")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2018, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_4");
   //Edge symbol end:'audio_4'

   //=========================================================
   
   //Edge symbol: 'audio_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("r5_audio_3")[0].pause();
         sym.$("r5_audio_3")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2305, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_3");
   //Edge symbol end:'audio_3'

   //=========================================================
   
   //Edge symbol: 'audio_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("r5_audio_2")[0].pause();
         sym.$("r5_audio_2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2462, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_2");
   //Edge symbol end:'audio_2'

   //=========================================================
   
   //Edge symbol: 'audio_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("r5_audio_5")[0].pause();
         sym.$("r5_audio_5")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2331, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_5");
   //Edge symbol end:'audio_5'

   //=========================================================
   
   //Edge symbol: 'audio_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("r5_audio_6")[0].pause();
         sym.$("r5_audio_6")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2410, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_6");
   //Edge symbol end:'audio_6'

   //=========================================================
   
   //Edge symbol: 'audio_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_7")[0].pause();
         sym.$("audiomp3_7")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2061, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_7");
   //Edge symbol end:'audio_7'

   //=========================================================
   
   //Edge symbol: 'audio_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_9")[0].pause();
         sym.$("audiomp3_9")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2805, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_9");
   //Edge symbol end:'audio_9'

   //=========================================================
   
   //Edge symbol: 'DROP_3'
   (function(symbolName) {   
   
      })("DROP_3");
   //Edge symbol end:'DROP_3'

   //=========================================================
   
   //Edge symbol: 'DROP_4'
   (function(symbolName) {   
   
      })("DROP_4");
   //Edge symbol end:'DROP_4'

   //=========================================================
   
   //Edge symbol: 'DROP_5'
   (function(symbolName) {   
   
      })("DROP_5");
   //Edge symbol end:'DROP_5'

   //=========================================================
   
   //Edge symbol: 'DROP_6'
   (function(symbolName) {   
   
      })("DROP_6");
   //Edge symbol end:'DROP_6'

   //=========================================================
   
   //Edge symbol: 'audio_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_8")[0].pause();
         sym.$("audiomp3_8")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2452, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_8");
   //Edge symbol end:'audio_8'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6342212");