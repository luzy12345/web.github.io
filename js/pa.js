function pa(){
	var pv=Number(document.getElementById("pv").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
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
	var a=pv*(rate*(1+rate)**nper)/((1+rate)**nper-1);
	document.getElementById("pa").innerHTML=a;
}