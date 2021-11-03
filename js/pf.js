function pf(){
	var pv=Number(document.getElementById("pv").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	var fv;
	
	fv=pv*((1+rate)**nper);
	
	document.getElementById("pf").innerHTML=fv;
}