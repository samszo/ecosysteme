var largeurTampon = 400;

function PageChargee(){

	d3.select("#Calque_2").on("click",AugmenterBarre);

	d3.select("#Calque_3").on("click",DiminuerBarre);

	d3.select("#barre").transition().duration(1000).attr("x2", largeurTampon);
	
	
}


function AugmenterBarre(){
	//alert("ok");

	d3.select("#barre").transition().duration(1000).attr("x2", largeurTampon+40);
	
	

	largeurTampon += 40;
}

function DiminuerBarre(){

	d3.select("#barre").transition().duration(1000).attr("x2", largeurTampon-40);
	


	largeurTampon -= 40;
}
