function ap(){
	var a=Number(document.getElementById("a").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	var pv=a*(1-1/(1+rate)**nper)/rate;
	document.getElementById("ap").innerHTML=pv;
}