function pa(){
	var pv=Number(document.getElementById("pv").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	var a=pv*(rate*(1+rate)**nper)/((1+rate)**nper-1);
	document.getElementById("pa").innerHTML=a;
}