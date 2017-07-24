// app code goes here
// matrix.init()....
//
// have fun

var options = {
		refresh: 100,
		timeout: 1000
}
//var ColorLED = ['#ffffff', '#ffffff', '#00ffff', '#00e6e6', '#00ffbf', '#00e6ac', '#00ff80', '#00e673', '#00ff40', '#00e639', '#00ff00', '#00e600', '#40ff00', '#39e600',   '#80ff00', '#73e600', '#66cc00', '#bfff00', '#ace600', '#99cc00', '#ffff00', '#e6e600', '#cccc00', '#ffbf00', '#e6ac00', '#cc9900', '#ff8000', '#e67300', '#cc6600', '#ff4000', '#e63900', '#cc3300', '#ff0000', '#e60000', '#cc0000'
//]
var counter = 0;
var step = 15;
/*
var colorFill = [];
var counter = 0;
*/
var red = 0;
var blue = 255;

function blueFn(h){
	return 255 - h*255;
}
function redFn(h){
	return 255*h
}
matrix.sensor('humidity', options).then(function(data){
	console.log('humidity: >>>>>>', data);
	var h = data.value/100
	red = redFn(h);
	blue = blueFn(h)
});

setInterval(function(){
			console.log(`red : ${red} , blue : ${blue}`);	
			matrix.led([
				{
					start: 0,
					arc: 360,
					//color : 'rgb(0,0,255)'
					color: `rgb( ${Math.floor(red)} , 0 , ${Math.floor(blue)})`
				}
				]).rotate(counter*step).render();
				counter++;
			},100);