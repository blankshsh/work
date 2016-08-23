在addnews.php、updata.php、调用htmlspecialchars和addslashes函数转义了实体字符，防止注入。

在show.php、update.php中又使用了htmlspecialchars_decode函数转译回来。


在提交表格上面加了token。
然后php验证了些token是否正确，如果不正确，那就不添加信息并返回错误信息。