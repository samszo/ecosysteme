var largeurTampon = 400;

var note = 10;

var boutonsPositifs = [{"nom":"consignes respectées", "idClick":"#Calque_2"},
						{"nom":"Pertinent", "idClick":"#Calque_4"},
						{"nom":"Travail Soigné", "idClick":"#Calque_12"},
						{"nom":"Original", "idClick":"#Calque_5"}];

var boutonsNegatifs = [{"nom":"consignes non respectées", "idClick":"#Calque_3"},
						{"nom":"Manque de pertinence", "idClick":"#Calque_6"},
						{"nom":"Manque de pertinence", "idClick":"#Calque_13"},
						{"nom":"Manque de pertinence", "idClick":"#Calque_7"}];


function PageChargee(){

	for (var i = 0; i < boutonsPositifs.length; i++) {
		d3.select(boutonsPositifs[i].idClick).on("click",AugmenterBarre);
	}

	for (var i = 0; i < boutonsNegatifs.length; i++) {
		d3.select(boutonsNegatifs[i].idClick).on("click",DiminuerBarre);
	}

	// initialisation de la barre au  et de la note à 10
	d3.select("#barre").transition().duration(1000).attr("x2", largeurTampon);
	document.getElementById("note").textContent = note + "/20";

}


function AugmenterBarre(){
	//alert("ok");

	d3.select("#barre").transition().duration(1000).attr("x2", largeurTampon+47);

	note=note+2;
	
	var noteAffichee = document.getElementById("note");
	noteAffichee.textContent = note + "/20";

	largeurTampon += 47;

	CouleurBarre();
}

function DiminuerBarre(){

	d3.select("#barre").transition().duration(1000).attr("x2", largeurTampon-47);

	note=note-2;
	
	var noteAffichee = document.getElementById("note");
	noteAffichee.textContent = note + "/20";

	largeurTampon -= 47;

	CouleurBarre();
}

function CouleurBarre(){

	if(note<10){
		d3.select("#barre").attr("stroke", "#ff3333");
	}

	if(note>10){
		d3.select("#barre").attr("stroke", "#39B54A");
	}

}