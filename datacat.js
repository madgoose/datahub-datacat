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

function getMousePosition(e){
	var mouseX = e.clientX;
	var mouseY = e.clientY;
	mousePos.innerHTML = mouseX + " " + mouseY;
}

function getScreenDimensions(e){
	var intViewportHeight = window.innerHeight;
	var intViewportWidth = window.innerWidth;
	screenDimensions.innerHTML = intViewportHeight + " " + intViewportWidth;
}

document.addEventListener("mousemove", function( event ) {
	getMousePosition(event);

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