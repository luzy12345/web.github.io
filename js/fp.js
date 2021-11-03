function fp(){
	var fv=Number(document.getElementById("fv").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	var pv=fv/((1+rate)**nper);
	
	
	document.getElementById("fp").innerHTML=pv;
}