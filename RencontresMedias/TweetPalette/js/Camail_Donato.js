console.log('on y est');
var clics=[];


// Identifiant des différent éléments de la tweet palette qui sont associés à leur couleurs respectives
		 
var elInt = [    
			 {"idEle":"Poly1Indet","couleur":"#2c1317","hauteur":0}
             ,{"idEle":"Poly2Indet","couleur":"#85404c","hauteur":0}
             ,{"idEle":"Poly3Indet","couleur":"#c07784","hauteur":0}
			 
             ,{"idEle":"Poly3Det","couleur":"#bbf07f","hauteur":0}
			 ,{"idEle":"Poly2Det","couleur":"#80a457","hauteur":0}
			 ,{"idEle":"Poly1Det","couleur":"#40522c","hauteur":0}

             ,{"idEle":"Poly3Suiveur","couleur":"#9459bb","hauteur":0}
			 ,{"idEle":"Poly2Suiveur","couleur":"#441266","hauteur":0}
			 ,{"idEle":"Poly1Suiveur","couleur":"#1c032d","hauteur":0}
			 
			 ,{"idEle":"Poly1Leader","couleur":"#272c3e","hauteur":0}
             ,{"idEle":"Poly2Leader","couleur":"#1d2a57","hauteur":0}
             ,{"idEle":"Poly3Leader","couleur":"#2e428a","hauteur":0}
 
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
		.attr("y", 600 - d.hauteur/3 - 10)
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


//Partie Bouton Slider

function allowDrop(event) {event.preventDefault();} // on crée une fonction pour preventDefault
var maDestination=document.getElementById('cursor1'); // on assigne l’élément à une variable
maDestination.addEventListener("drop",cursorMoove); // on ajoute les événements
maDestination.addEventListener("dragenter", allowDrop);
maDestination.addEventListener("dragover", allowDrop); 

//********************

function cursorMoove (event) {
	maDestination.position.x = 0;
	maDestination.position.y = 10;	
}
