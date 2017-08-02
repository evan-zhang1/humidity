// app code goes here
// matrix.init()....
//
// have fun
var options = {
		refresh: 100,
		timeout: 1000
}
var counter = 0;
var step = 15;
var high = 0;
var low = 255;

function highVal(h){
	return 255*h
}
function lowVal(h){
	return 255 - h*255;
}
// function ClearInt(){
//     clearInterval(Clear)
// }

matrix.sensor('humidity', options).then(function(data){
	console.log('humidity: >>>>>>', data);
	var h = data.value/100
	high = highVal(h);
    low = lowVal(h)
    matrix.type('monitor').send({
        'humidity': Math.floor(data.value) 
    });  
});

matrix.on('redblue', function(p){
    if(p.value === true){
        setInterval(function(){
            matrix.led([{
                start: 0,
                arc: 360,
                color: `rgb( ${Math.floor(high)} , 0 , ${Math.floor(low)} )`}
            ]).rotate(counter*step).render();
        },100);}
    else{matrix.led('black').render();}
});

matrix.on('redgreen', function(p){
    if(p.value === true){
        setInterval(function(){
            matrix.led([{
                start: 0,
                arc: 360,
                color: `rgb( ${Math.floor(high)} , ${Math.floor(low)} , 0 )`}
            ]).rotate(counter*step).render();
        },100);}
    else{matrix.led('black').render();}
});

matrix.on('greenred', function(p){
    if(p.value === true){
        setInterval(function(){
            matrix.led([{
                start: 0,
                arc: 360,
                color: `rgb( ${Math.floor(low)} , ${Math.floor(high)} , 0 )`}
            ]).rotate(counter*step).render();
        },100);}
    else{matrix.led('black').render();}
});

matrix.on('greenblue', function(p){
    if(p.value === true){
        setInterval(function(){
            matrix.led([{
                start: 0,
                arc: 360,
                color: `rgb( 0 , ${Math.floor(high)} , ${Math.floor(low)} )`}
            ]).rotate(counter*step).render();
        },100);}
    else{matrix.led('black').render();}
});

matrix.on('bluered', function(p){
    if(p.value === true){
        setInterval(function(){
            matrix.led([{
                start: 0,
                arc: 360,
                color: `rgb( ${Math.floor(low)} , 0 , ${Math.floor(high)} )`}
            ]).rotate(counter*step).render();
        },100);}
    else{matrix.led('black').render();}
});

matrix.on('bluegreen', function(p){
    if(p.value === true){
        setInterval(function(){
            matrix.led([{
                start: 0,
                arc: 360,
                color: `rgb( 0 , ${Math.floor(low)} , ${Math.floor(high)})`}
            ]).rotate(counter*step).render();
        },100);}
    else{matrix.led('black').render();}
});

// setInterval(function(){
// 	console.log(`red : ${high} , blue : ${low}`);	
// 	matrix.led([
// 		{
// 		start: 0,
// 		arc: 360,
// 		color: colorcomb
// 		}
// 			]).rotate(counter*step).render();
// 			counter++;
//         },100);

/*
var colorcomb;
var ColorPicker = confirm('Please choose a color (Red, Green, Blue) for High and Low Humidity. (Choose two unique Colors separated by a space and a comma. E.g. : Red, Blue');
switch(ColorPicker) {
    case 'Red, Blue':
        colorcomb = `rgb( ${Math.floor(high)} , 0 , ${Math.floor(low)} )`
        break;
    case 'Red, Green':
        colorcomb = `rgb( ${Math.floor(high)} , ${Math.floor(low)} , 0 )`
        break;
    case 'Green, Red':
        colorcomb = `rgb( ${Math.floor(low)} , ${Math.floor(high)} , 0 )`
        break;
    case 'Green, Blue':
        colorcomb = `rgb( 0 , ${Math.floor(high)} , ${Math.floor(low)} )`
        break;
    case 'Blue, Red':
        colorcomb = `rgb( ${Math.floor(low)} , 0 , ${Math.floor(high)} )`
        break;
    case 'Blue, Green':
        colorcomb = `rgb( 0 , ${Math.floor(low)} , ${Math.floor(high)})`
        break;
    default:
        text = 'Please choose a color (Red, Green, Blue) for High and Low Humidity. Choose two unique Colors separated by a space and a comma. E.g. : Red, Blue'
}*/

//var ColorLED = ['#ffffff', '#ffffff', '#00ffff', '#00e6e6', '#00ffbf', '#00e6ac', '#00ff80', '#00e673', '#00ff40', '#00e639', '#00ff00', '#00e600', '#40ff00', '#39e600',   '#80ff00', '#73e600', '#66cc00', '#bfff00', '#ace600', '#99cc00', '#ffff00', '#e6e600', '#cccc00', '#ffbf00', '#e6ac00', '#cc9900', '#ff8000', '#e67300', '#cc6600', '#ff4000', '#e63900', '#cc3300', '#ff0000', '#e60000', '#cc0000'
//]

