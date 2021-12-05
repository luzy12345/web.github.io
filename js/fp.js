function fp(){
	var fv=Number(document.getElementById("fv").value);
	var rate=Number(document.getElementById("rate").value);
	var nper=Number(document.getElementById("nper").value);
	if(fv==null||fv==" "){
		alert("终值不能为空");
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
	var pv=fv/((1+rate)**nper);
	
	
	document.getElementById("fp").innerHTML=pv;
}