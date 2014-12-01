console.log('on y est');
var clics=[];


// Identifiant des différent éléments de la tweet palette qui sont associés à leur couleurs respectives
		 
var elInt = [    
			{"idEle":"1","couleur":"#D6FEBE","hauteur":0}
			,{"idEle":"2","couleur":"#B0FE94","hauteur":0}
			,{"idEle":"3","couleur":"#FDEF94","hauteur":0}
			,{"idEle":"4","couleur":"#3FEC01","hauteur":0}
			,{"idEle":"5","couleur":"#E1F67A","hauteur":0}
			,{"idEle":"6","couleur":"#F9E66F","hauteur":0}
			,{"idEle":"7","couleur":"#57EF8F","hauteur":0}
			,{"idEle":"8","couleur":"#F6C0D9","hauteur":0}
			,{"idEle":"9","couleur":"#9645A6","hauteur":0}
			,{"idEle":"10","couleur":"#C1ADE1","hauteur":0}
			,{"idEle":"11","couleur":"#6701CE","hauteur":0}
			,{"idEle":"12","couleur":"#DCA0E8","hauteur":0}
			,{"idEle":"13","couleur":"#A661EA","hauteur":0}
			,{"idEle":"14","couleur":"#E45FFE","hauteur":0}
			,{"idEle":"15","couleur":"#E45FFE","hauteur":0}
			,{"idEle":"16","couleur":"#E6643D","hauteur":0}
			,{"idEle":"17","couleur":"#FEC8CF","hauteur":0}
			,{"idEle":"18","couleur":"#E60073","hauteur":0}
			,{"idEle":"19","couleur":"#FDBE9A","hauteur":0}
			,{"idEle":"20","couleur":"#F75F88","hauteur":0}
			,{"idEle":"21","couleur":"#FEA162","hauteur":0}
			,{"idEle":"22","couleur":"#5FF7B5","hauteur":0}
			,{"idEle":"23","couleur":"#3ACB79","hauteur":0}
			,{"idEle":"24","couleur":"#7BBF7E","hauteur":0}
			,{"idEle":"25","couleur":"#04D9C4","hauteur":0}
			,{"idEle":"26","couleur":"#64C88C","hauteur":0}
			,{"idEle":"27","couleur":"#20DC6C","hauteur":0}
			,{"idEle":"28","couleur":"#0C9865","hauteur":0}
			
			
			
			
			
			
			
			
			
			
			
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
