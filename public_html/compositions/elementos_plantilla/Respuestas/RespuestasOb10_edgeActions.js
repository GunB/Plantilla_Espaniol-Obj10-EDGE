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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'respuesta_1'
   (function(symbolName) {   
   
   })("respuesta_1");
   //Edge symbol end:'respuesta_1'

   //=========================================================
   
   //Edge symbol: 'respuesta_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         confirmar();
      });
      //Edge binding end

   })("respuesta_2");
   //Edge symbol end:'respuesta_2'

   //=========================================================
   
   //Edge symbol: 'respuesta_3'
   (function(symbolName) {   
   
      })("respuesta_3");
   //Edge symbol end:'respuesta_3'

   //=========================================================
   
   //Edge symbol: 'indicador'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("indicador");
   //Edge symbol end:'indicador'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("Submit");
   //Edge symbol end:'Submit'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-22315124");