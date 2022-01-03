<h2>博文归档</h2>
        
            <table id="table">
                <tr>
                    <th>标题</th>
                    <th>作者</th>
                    <th>上传日期</th>
                    <th>分类</th>
                </tr>
                <tr>
                    <td><a href="../blog/readme.html" style="text-decoration: none;color: #000;">README</a></td>
                    <td><a href="../blog/aboutluzy.html" style="text-decoration: none;color: #000;">Luzy</a></td>
                    <td>2021.11.24</td>
                    <td><a href="../classification/classification_introduce.html" style="text-decoration: none;color: #000;">介绍区</a></td>
                </tr>
                <tr>
                    <td><a href="../blog/aboutluzy.html" style="text-decoration: none;color: #000;">ABOUTME</a></td>
                    <td><a href="../blog/aboutluzy.html" style="text-decoration: none;color: #000;">Luzy</a></td>
                    <td>2021.11.23</td>
                    <td><a href="../classification/classification_introduce.html" style="text-decoration: none;color: #000;">介绍区</a></td>
                </tr>
                
                <% data.forEach(function(post){ %>        
                    <tr>
                    <td><%= post.id %></td>
                    <td><a href="#/posts/<%= post.id %>"><%= post.title %></a></td>
                    <td><%= post.created_at %></td> 
                    <td>
                        <a href="#/posts/<%= post.id %>/edit">改</a>
                        <a href="#/posts/<%= post.id %>/delete">删</a>
                    </td> 
                    </tr> 
                <% }) %>
            </table>
            <button onclick="window.location.href ='../login.html'">新增文档</button>