
var clics2=[];
// Identifiant des différent éléments de la tweet palette qui sont associés à leur couleurs respectives	 
var elInt2 = [    
			 {"idEle2":"extra3","couleur2":"#f1f2f2","hauteur2":0}
             ,{"idEle2":"extra2","couleur2":"#d1d3d4","hauteur2":0}
			 ,{"idEle2":"extra1","couleur2":"#a7a9ac","hauteur2":0}
			 ,{"idEle2":"extra4","couleur2":"#808285","hauteur2":0}
			 ,{"idEle2":"extra5","couleur2":"#58595b","hauteur2":0}
			 ,{"idEle2":"extra6","couleur2":"#000000","hauteur2":0}

             ];
var x;

function ajoutEvent2(){
	
	elInt2.forEach(function(e){
		ele2 = document.getElementById(e.idEle2);
		ele2.setAttribute("class",'imgEvent2');
	});
	d3.selectAll(".imgEvent2")
		.data(elInt2)
		.on("click",ajoutClic2);
	
	x = d3.scale.linear()
	.domain([0, 1000])
	.range([0, 800]);

}

function ajoutClic2(d, i){
	d.hauteur2 += 10;
	clics2.push({"couleur2":d.couleur2, "hauteur2":d.hauteur2});
	updateGraphBar2(d);

}

function updateGraphBar2(d){

	//d�finit une marge � gauche
	var margeGauche2 = 0;

	//d�finit la largeur des barres du graphe
	var largeur2 = (800 - margeGauche2) / clics2.length;

	//cr�e une barre pour la nouvelle temp�rature
	d3.select("svg")
		.append("rect")
		.attr("id", "bar2" + clics2.length)
		.attr("y", 600 - d.hauteur2/3 - 10)
		.attr("x", 800)
		.attr("height", d.hauteur2/3 + 35)
		.attr("width", 0)
		.style("fill", d.couleur2);

	//modifie la largeur et la position de chaque barre du graphe
	for(var i = 0; i <= clics2.length; i++){
		d3.select("#bar2"+i)
			.transition()
			.duration(1500)
			.attr("width", largeur2)
			.attr("x", margeGauche2 + 1 + largeur2 * (i-1));
	}
}

function updateGraphBarD32(){

	//d�finit une marge � gauche
	var margeGauche2 = 200;

	//d�finit la largeur des barres du graphe
	var largeur2 = (800 - margeGauche2) / clics2.length;

	//cr�e une barre pour la nouvelle temp�rature
	d3.select("svg")
		.selectAll(".bar2")
		.data(clics2).enter()
		.append("rect")
		.attr("id", function(d,i){
			"bar2" + i;
			})
		.attr("class", "bar2")
		.attr("y", function(d,i){
			return 600 - d.hauteur2/3 - 10;
		})
		.attr("x", function(d,i){
			return 800 - margeGauche2 * (i+1);
		})
		.attr("height", function(d,i){
			return x(d.hauteur2);
		})
		.attr("width", function(d) { return x(d.hauteur2); })
		.style("fill", function(d,i){
			return d.couleur2;
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
