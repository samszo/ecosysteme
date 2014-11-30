var largeurTampon = 400;

function PageLoad(){

	d3.select("#Soleil").on("click",AugmenterBarreSoleil);

	d3.select("#Eclaircie").on("click",AugmenterBarreEclaircie);

	d3.select("#Nuagebleu").on("click",AugmenterBarreNuagebleu);

	d3.select("#Neige").on("click",AugmenterBarreNeige);

	d3.select("#Gris").on("click",DiminuerBarreGris);

	d3.select("#Pluie").on("click",DiminuerBarrePluie);

	d3.select("#Foudre").on("click",DiminuerBarreFoudre);

	d3.select("#barre").transition().duration(1000).attr("x2", largeurTampon);
}


function AugmenterBarreSoleil(){
	

	d3.select("#barre").transition().duration(500).attr("x2", largeurTampon+80);

	largeurTampon += 40;
}

function AugmenterBarreEclaircie(){
	

	d3.select("#barre").transition().duration(500).attr("x2", largeurTampon+60);

	largeurTampon += 40;
}

function AugmenterBarreNuagebleu(){
	

	d3.select("#barre").transition().duration(500).attr("x2", largeurTampon+40);

	largeurTampon += 40;
}

function AugmenterBarreNeige(){
	

	d3.select("#barre").transition().duration(500).attr("x2", largeurTampon+20);

	largeurTampon += 40;
}

function DiminuerBarreGris(){

	d3.select("#barre").transition().duration(500).attr("x2", largeurTampon-20);
	
	largeurTampon -= 40;
}

function DiminuerBarrePluie(){

	d3.select("#barre").transition().duration(500).attr("x2", largeurTampon-60);
	
	largeurTampon -= 40;
}

function DiminuerBarreFoudre(){

	d3.select("#barre").transition().duration(500).attr("x2", largeurTampon-80);
	
	largeurTampon -= 40;
}