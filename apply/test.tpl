<script>
        var stackedCard = new stackedCards({
            selector: '.stacked-cards',
            layout: "slide",
            transformOrigin: "center",
        });

        stackedCard.init();
    </Script>
    <div class="navbar">
        <div class="headerbox">
            <h1 class="header">复利计算器</h1>
        </div>
        <div class="abox">
            <li><a href="../details_html/follow_details.html">关注我</a></li>
            <li><a href="../list_html/blog.html">blog</a></li>
            <li><a class="active" href="../details_html/apply_details.html">应用</a></li>
            <li><a href="../details_html/calculator_details.html">计算器</a></li>
            <li><a href="../index.html">首页</a></li>
        </div>
    </div>
 
    <div class="stacked-cards">
        <div class="mycards">
            <ul>
                <% tupian.forEach(function(tupian){ %>
                <li><img src=<%= tupian %>></li>
                <% }) %>
            </ul>
        </div>
    </div>   
    
   