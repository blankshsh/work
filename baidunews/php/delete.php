<?php 
	$con = mysql_connect('localhost', 'root', '');
	if (!$con) {
	die ('连接数据库出错: ' . mysql_error());
	}
	mysql_query("set names 'utf8'"); //数据库输出编码 
	mysql_select_db("newsdata",$con); //打开数据库
	$newsid = $_POST['newsid'];
	$sql ="select * from news"; //SQL语句
	$result ="DELETE FROM `news` WHERE newsid=$newsid";//
	$printresult = mysql_query($result,$con); //执行查询
		if(!$printresult){
					die("Valid result!");
			}else{
				echo $newsid;
		}
	
?>