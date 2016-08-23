极客学院首页，dom操作，基本的jq轮播图


百度新闻html5版+后台管理系统，需在服务器环境下运行，并做了防攻击注入。
ajax+php+mysql



在addnews.php、updata.php、调用htmlspecialchars和addslashes函数转义了实体字符，防止注入。
在show.php、update.php中又使用了htmlspecialchars_decode函数转译回来。
在提交表格上面加了token。
然后php验证了些token是否正确，如果不正确，那就不添加信息并返回错误信息。
