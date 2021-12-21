function add(){
    //创建表格
//创建对象
//window下面的属性方法可以把window去掉或者写上
var table = window.document.createElement("table");
for(var i=0;i<4;i++){
var tr = document.createElement("tr");
var td = document.createElement("td");

var txt = document.createTextNode("hello");
var txt2 = document.createTextNode("hello");
//把表格添加到body里去
td.appendChild(txt);
td.appendChild(txt2);
tr.appendChild(td);

//给表格设置各行变色
if(i%2 == 0){

//偶数为红色
tr.style.backgroundColor = "red";
}else{

//奇数为绿色
tr.style.backgroundColor = "green";
}
table.appendChild(tr);
}
table.setAttribute("border",1);

document.body.appendChild(table);
}


