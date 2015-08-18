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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${r6_atras}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${r6_siguiente}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${r6_enviar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         do_submit(sym);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'pregunta_1'
   (function(symbolName) {   
   
   })("pregunta_1");
   //Edge symbol end:'pregunta_1'

   //=========================================================
   
   //Edge symbol: 'pregunta_2'
   (function(symbolName) {   
   
   })("pregunta_2");
   //Edge symbol end:'pregunta_2'

   //=========================================================
   
   //Edge symbol: 'pregunta_3'
   (function(symbolName) {   
   
   })("pregunta_3");
   //Edge symbol end:'pregunta_3'

   //=========================================================
   
   //Edge symbol: 'pregunta_4'
   (function(symbolName) {   
   
   })("pregunta_4");
   //Edge symbol end:'pregunta_4'

   //=========================================================
   
   //Edge symbol: 'pregunta_5'
   (function(symbolName) {   
   
   })("pregunta_5");
   //Edge symbol end:'pregunta_5'

   //=========================================================
   
   //Edge symbol: 'pregunta_6'
   (function(symbolName) {   
   
   })("pregunta_6");
   //Edge symbol end:'pregunta_6'

   //=========================================================
   
   //Edge symbol: 'pregunta_7'
   (function(symbolName) {   
   
   })("pregunta_7");
   //Edge symbol end:'pregunta_7'

   //=========================================================
   
   //Edge symbol: 'pregunta_8'
   (function(symbolName) {   
   
   })("pregunta_8");
   //Edge symbol end:'pregunta_8'

   //=========================================================
   
   //Edge symbol: 'pregunta_9'
   (function(symbolName) {   
   
   })("pregunta_9");
   //Edge symbol end:'pregunta_9'

   //=========================================================
   
   //Edge symbol: 'pregunta_10'
   (function(symbolName) {   
   
   })("pregunta_10");
   //Edge symbol end:'pregunta_10'

   //=========================================================
   
   //Edge symbol: 'r6_enviar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
      //Edge binding end

   })("r6_enviar");
   //Edge symbol end:'r6_enviar'

   //=========================================================
   
   //Edge symbol: 'r6_siguiente'
   (function(symbolName) {   
   
   })("r6_siguiente");
   //Edge symbol end:'r6_siguiente'

   //=========================================================
   
   //Edge symbol: 'r6_atras'
   (function(symbolName) {   
   
   })("r6_atras");
   //Edge symbol end:'r6_atras'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-8499656");