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

      

      

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_2";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
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

      

      

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_4");

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

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_4";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_5}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_5";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_5}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_5";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_6}", "mousemove", function(sym, e) {
         // introducir código que se ejecute cuando se mueva el ratón sobre el objeto
         var nombrePick = "PICK_6";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_6}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         
         var nombrePick = "PICK_6";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_7}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_7";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_7}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_7";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_8}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_8}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_8";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_8}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_8";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_9}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_9}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         var nombrePick = "PICK_9";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_9}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         var nombrePick = "PICK_9";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }

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
   
   //Edge symbol: 'PICK_5'
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

   })("PICK_5");
   //Edge symbol end:'PICK_5'

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

   })("zoom_1_1");
   //Edge symbol end:'zoom_1_1'

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