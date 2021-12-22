function add(){
    //创建表格
//创建对象
var table = document.createElement("table");
for(var i=0;i<4;i++){
var th = document.createElement("th");
var tr = document.createElement("tr");
var td = document.createElement("td");

var txt1 = document.createTextNode("标题");
var txt2 = document.createTextNode("作者");
var txt3 = document.createTextNode("正文");
var txt3 = document.createTextNode("时间");
var txt3 = document.createTextNode("分类");
//把表格添加到body里去
td.appendChild(txt);
td.appendChild(txt2);
tr.appendChild(td);


table.appendChild(tr);
}
table.setAttribute("border",1);

document.body.appendChild(table);
}


