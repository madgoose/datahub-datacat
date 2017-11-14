var cat = document.getElementById("body"),
	catHead = document.getElementById("head"),
	collars = document.querySelectorAll(".cls-15"),
	glasses = document.getElementById("glasses"),
	earLeft = document.getElementById("inner-ear"),
	earRight = document.getElementById("inner-ear-2"),
	nose  = document.getElementById("nose"),
	pie = document.getElementById("pie"),
	tie = document.getElementById("tie-knot"),
	mousePos = document.getElementById("mouse-position"),
	screenDimensions = document.getElementById("screen-dimensions"),
	glassesColourText = document.getElementById("glasses-colour"),
	glassesColour = window.getComputedStyle(glasses, null),
	glassesColourFill = glassesColour.fill,
	intViewportHeight = window.innerHeight,
	intViewportWidth = window.innerWidth,


	setRandomColour = function(){
		var r = parseInt(Math.floor(Math.random() * 256));
		var g = parseInt(Math.floor(Math.random() * 256));
		var b = parseInt(Math.floor(Math.random() * 256));
		return ["rgb(",r,",",g,",",b,")"].join("");
	};

for (var i = 0; i < collars.length; ++i) {
	var collar = collars[i];
}

function getPercentagePosition(){

}

function getMousePosition(e){
	var mouseX = e.clientX,
		mouseY = e.clientY;


	mousePos.innerHTML = mouseX + " " + mouseY;
	//console.log(mouseX + " " + mouseY);
}

function getScreenDimensions(e){
	var intViewportHeight = window.innerHeight;
	var intViewportWidth = window.innerWidth;
	screenDimensions.innerHTML = intViewportHeight + " " + intViewportWidth;
	//console.log(intViewportHeight + " " + intViewportWidth);
}

function getRGBValue(){
	//var string = "rgb(0, 255, 0)";
	var rgb = glassesColourFill.match(/\d+/g);
	var r = rgb[0],
		g = rgb[1],
		b = rgb[2];
    //console.log(r, g, b);
    rgbToHsl(r, g, b);

}

function updateGlassesColour(h, s, l){
	//var glassesColourFill = glassesColour.fill;

	glassesColourText.innerHTML = glassesColourFill;
	//console.log(glassesColourFill);
	console.log(h, s, l);
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 */
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    //console.log(h, s, l);
    //return [h, s, l];
    updateGlassesColour(h, s, l);
}

document.addEventListener("mousemove", function( event ) {
	getMousePosition(event);
	updateGlassesColour();
}, false);

collar.addEventListener("click", function( event ) {
	collar.style.fill = setRandomColour();
	collar.style.stroke = setRandomColour();
}, false);

earLeft.addEventListener("click", function( event ) {
	glasses.classList.add("hidden");
	tint.classList.add("hidden");
}, false);

earRight.addEventListener("click", function( event ) {
	glasses.classList.remove("hidden");
	tint.classList.remove("hidden");
}, false);

glasses.addEventListener("click", function( event ) {
	glasses.style.fill = setRandomColour();
}, false);

nose.addEventListener("click", function( event ) {
	var c = setRandomColour();
	cat.style.fill = c;
	catHead.style.fill = c;
}, false);

tie.addEventListener("click", function( event ) {
	pie.classList.toggle("rotating-faster");
}, false);

window.addEventListener('resize', function(event){
  // do stuff here
  getScreenDimensions();
});

getScreenDimensions();
updateGlassesColour();
getRGBValue();