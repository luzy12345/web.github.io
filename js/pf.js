function pf(){
	var pv=Number(document.getElementById("pv").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	var fv;
	if(pv==null||pv==" "){
		alert("现值不能为空");
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
	
	fv=pv*((1+rate)**nper);
	
	document.getElementById("pf").innerHTML=fv;
}