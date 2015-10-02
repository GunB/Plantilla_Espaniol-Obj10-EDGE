function reproducirAudio(sym, numeroAudio, cantidadDeAudios){
	
if (sym.getSymbol("DRAG_"+numeroAudio).$("r5_audio_"+numeroAudio)[0].paused) {
	sym.getSymbol("DRAG_"+numeroAudio).play("play");

	for(var i=1; i<=cantidadDeAudios; i++){
		if(typeof sym.getSymbol("DRAG_"+i) != 'undefined'){
				if(i!=numeroAudio){
					sym.getSymbol("DRAG_"+i).play("play");
					sym.getSymbol("DRAG_"+i).play("stop");
				}
			}else{
			console.log("el audio "+i+" no existe.");
			}
	}
} else {
	sym.getSymbol("DRAG_"+numeroAudio).play("stop");
}
}

