console.log('on y est');
var clics=[];

var elInt = [
             {"idEle":"image3243","couleur":"#f70d0d","hauteur":0}
             ,{"idEle":"image3532","couleur":"#f7430d","hauteur":0}
             ,{"idEle":"image3613","couleur":"#078c22","hauteur":0}
             ];
var x;

function ajoutEvent(){
	
	elInt.forEach(function(e){
		ele = document.getElementById(e.idEle);
		ele.setAttribute("class",'imgEvent');
	});
	d3.selectAll(".imgEvent")
		.data(elInt)
		.on("click",ajoutClic);
	
	x = d3.scale.linear()
	.domain([0, 1000])
	.range([0, 800]);

}

function ajoutClic(d, i){
	d.hauteur += 10;
	clics.push({"couleur":d.couleur, "hauteur":d.hauteur});
	updateGraphBar(d);
}


function updateGraphBar(d){

	//d�finit une marge � gauche
	var margeGauche = 0;

	//d�finit la largeur des barres du graphe
	var largeur = (800 - margeGauche) / clics.length;

	//cr�e une barre pour la nouvelle temp�rature
	d3.select("svg")
		.append("rect")
		.attr("id", "bar" + clics.length)
		.attr("y", 1000 - d.hauteur/3 - 10)
		.attr("x", 800)
		.attr("height", d.hauteur/3 + 10)
		.attr("width", 0)
		.style("fill", d.couleur);

	//modifie la largeur et la position de chaque barre du graphe
	for(var i = 0; i <= clics.length; i++){
		d3.select("#bar"+i)
			.transition()
			.duration(1500)
			.attr("width", largeur)
			.attr("x", margeGauche + 1 + largeur * (i-1));
	}
}

function updateGraphBarD3(){

	//d�finit une marge � gauche
	var margeGauche = 200;

	//d�finit la largeur des barres du graphe
	var largeur = (800 - margeGauche) / clics.length;

	//cr�e une barre pour la nouvelle temp�rature
	d3.select("svg")
		.selectAll(".bar")
		.data(clics).enter()
		.append("rect")
		.attr("id", function(d,i){
			"bar" + i;
			})
		.attr("class", "bar")
		.attr("y", function(d,i){
			return 600 - d.hauteur/3 - 10;
		})
		.attr("x", function(d,i){
			return 800 - margeGauche * (i+1);
		})
		.attr("height", function(d,i){
			return x(d.hauteur);
		})
		.attr("width", function(d) { return x(d.hauteur); })
		.style("fill", function(d,i){
			return d.couleur;
		});

	/*modifie la largeur et la position de chaque barre du graphe
	d3.selectAll(".bar")
		.transition()
		.duration(1500)
		.attr("x", function(d, i){
			800 - margeGauche * (i+1);
		});
	*/
}
