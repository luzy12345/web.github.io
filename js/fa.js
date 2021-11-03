function fa(){
	var fv=Number(document.getElementById("fv").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	var a=fv*rate/((1+rate)**nper-1);
	document.getElementById("fa").innerHTML=a;
}