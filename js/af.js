function af(){
	var a=Number(document.getElementById("a").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	var fv=a*((1+rate)**nper-1)/rate;
	document.getElementById("af").innerHTML=fv;
}