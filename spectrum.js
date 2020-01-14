function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		

		for (var i = 0; i< spectrum.length; i++){
//            //vertical
//			var x = map(i, 0, spectrum.length, 0, width);
//		    var h = -height + map(spectrum[i], 0, 255, height, 0);
//		    rect(x, height, width / spectrum.length, h );
        var r = map(spectrum[i],0,255 ,0, 255);
        var g = map(spectrum[i],0, 255, 255, 0);
        var b = map(spectrum[i], 0, 255, 0, 0);

        fill(r, g, b)
        
            //horizontal
            var y2 = map(i, 0, spectrum.length, 0, height);
            var x2 = map(spectrum[i], 0, 255, 0, width);
            rect(0, y2, x2, height / spectrum.length);
            
            
  		}
        
		pop();
	};
}
