console.log('on y est');
var clics=[];
// Identifiant des différent éléments de la tweet palette qui sont associés à leur couleurs respectives	 
var elInt = [    
			 {"idEle":"bon3","couleur":"#00a14b","hauteur":0}
             ,{"idEle":"bon2","couleur":"#39b54a","hauteur":0}
			 ,{"idEle":"bon1","couleur":"#8dc63f","hauteur":0}
			 ,{"idEle":"mauvais1","couleur":"#fff210","hauteur":0}
			 ,{"idEle":"mauvais2","couleur":"#f26522","hauteur":0}
			 ,{"idEle":"mauvais3","couleur":"#B20F1B","hauteur":0}

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
		.attr("y", 600 - d.hauteur/3 - 450)
		.attr("x", 800)
		.attr("height", d.hauteur/3 + 35)
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
