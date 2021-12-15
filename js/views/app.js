var experss=require("express");
var app=experss();
var shujuku=[
    {   "biaoti":"我是0号新闻啊！我很开心",
        "shijian":"2015年9月23号",
        "zuozhe":"考拉0",
        "neirong":"<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>"
    },
    {   "biaoti":"我是1号新闻啊！我很开心",
        "shijian":"2015年9月23号",
        "zuozhe":"考拉1",
        "neirong":"<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>"
    },
    {   "biaoti":"我是2号新闻啊！我很开心",
        "shijian":"2015年9月23号",
        "zuozhe":"考拉2",
        "neirong":"<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>"
    },
    {   "biaoti":"我是3号新闻啊！我很开心",
        "shijian":"2015年9月23号",
        "zuozhe":"考拉3",
        "neirong":"<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>"
    }
];
app.set("view engine","ejs");
app.get("/news/:id",function (req,res) {
    //新闻id
    var id=parseInt(req.params.id);
    res.render("blog",shujuku[id]);
});
app.listen(3000);