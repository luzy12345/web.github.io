function af(){
	var a=Number(document.getElementById("a").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	if(a==null||a==" "){
		alert("年金不能为空");
		if(rate==null||rate==" "){
			alert("利率不能为空");
			if(nper==null||nper==" "){
				alert("期数不能为空");
			}
		}
		return false;
	}
	if(rate==null||rate==" "){
		alert("利率不能为空");
		if(nper==null||nper==" "){
			alert("期数不能为空");
		}
		return false;
	}
	if(nper==null||nper==" "){
		alert("期数不能为空");
		return false;
	}
	var fv=a*((1+rate)**nper-1)/rate;
	document.getElementById("af").innerHTML=fv;

}