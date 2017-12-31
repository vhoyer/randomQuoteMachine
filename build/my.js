let i = 0;
function genColor(){
	let colors = [
		"blueviolet",
		"brown",
		"cadetblue",
		"cornflowerblue",
		"darkcyan",
		"dimgrey",
		"dodgerblue",
		"forestgreen",
		"indigo",
		"orangered",
		"royalblue",
		"seagreen",
		"steelblue",
		"tomato"
	];
	if (i>=colors.length){i=0;}
	return colors[i++];
}

function addQuote(quote){
	quote["color"] = genColor();
	let container = document.querySelector('main');
	container.innerHTML += tmpl("quote_tmpl",quote);
}

function randomQuote(){
	$.getJSON("https://talaikis.com/api/quotes/random/", addQuote);
}

$(document).ready(function(){
	let EOP = document.querySelector("#pageEnd");
	randomQuote();

	$('#fab').on('click',function(){
		randomQuote();
		setTimeout(function(){
			zenscroll.intoView(EOP,800);
		},500);
	});
});
