var x;
var clicks=[];
var element = [
              {"idEle":"image3001","couleur":getRandomColor(),"hauteur":0}
             ,{"idEle":"image3113","couleur":getRandomColor(),"hauteur":0}
             ,{"idEle":"image3057","couleur":getRandomColor(),"hauteur":0}
			 ,{"idEle":"image3085","couleur":"red","hauteur":0}
			 ,{"idEle":"image3029","couleur":"black","hauteur":0}			 
             ];
	
function ajoutEvent(){

	element.forEach(function(e){
		ele = document.getElementById(e.idEle);
		ele.setAttribute("class",'imgEvent');
	});
	d3.selectAll(".imgEvent")
		.data(element)
		.on("click",ajoutClick);
	
	x = d3.scale.linear()	 

}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
	var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function ajoutClick(d, i){
	d.hauteur += 10;
	clicks.push({"hauteur":d.hauteur});
	updateGraphBar(d);
}


function updateGraphBar(d){

	//definit une marge a gauche
	var margeGauche = 50;

	//definit la largeur des barres du graphe
	var largeur = (750 - margeGauche) / clicks.length;

	//cree une barre pour la nouvelle temperature
	d3.select("svg")
		.append("rect")
		.attr("id", "bar" + clicks.length)
		.attr("y", 600 - d.hauteur/3 - 10)
		.attr("x", 400)
		.attr("height", d.hauteur/3 + 10)
		.attr("width", 0)			
		.style("fill", d.couleur);
			
	//modifie la largeur et la position de chaque barre du graphe
	for(var i = 0; i <= clicks.length; i++){
		d3.select("#bar"+i)
			.transition()
			.duration(1500)
			.attr("width", largeur)
			.attr("x", margeGauche + 1 + largeur * (i-1));
		
	}
		
}