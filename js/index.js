var Backgrounds = [
	"url('../assets/wat.gif')", 
	"url('../assets/veg.gif')", 
	"url('../assets/keyboardcat.gif')",
	"url('../assets/cookie.gif')",
	"url('../assets/nyan.gif')",
	"url('../assets/lel.gif')",
	"url('../assets/mickey.gif')",
	"url('../assets/type.gif')",
	"url('../assets/dtrump.gif')",
	"url('../assets/dravenyay.gif')",
	"url('../assets/freddy.gif')",
	"url('../assets/MURO.gif')"
	];

function pickBackground() {
	var Background1 = Math.floor(Math.random()*Backgrounds.length);

	document.body.style.backgroundImage = Backgrounds[Background1];
};