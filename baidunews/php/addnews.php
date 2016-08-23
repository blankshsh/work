<?php 
	session_start();
	$con = mysql_connect('localhost', 'root', '');
	if (!$con) {
	die ('连接数据库出错: ' . mysql_error());
	}
	mysql_query("set names 'utf8'"); //数据库输出编码 
	mysql_select_db("newsdata",$con); //打开数据库
	//定义数值
	$newstype =htmlspecialchars(addslashes($_POST['newstype']));
	$newstitle=htmlspecialchars(addslashes($_POST['newstitle']));
	$newsimg=htmlspecialchars(addslashes($_POST['newsimg']));
	$newscontent=htmlspecialchars(addslashes($_POST['newscontent']));
	$newstime=htmlspecialchars(addslashes($_POST['newstime']));
	$sql ="select * from news";
	if ($_SERVER['REQUEST_METHOD'] == 'POST' and (! isset($_POST['token']) || $_POST['token'] == $_SESSION['token'])) {
    	$result="INSERT INTO `news`(`newstype`,`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('".$newstype."','".$newstitle."','".$newsimg."','".$newscontent."','".$newstime."')";
		$result=mysql_query($result,$con);
			if(!$result){
					die('新闻添加数据失败:'.mysql_error());
					echo "error";
				}else{
					echo "Success";
				}
	} else {
			echo "csrferror";
	}

	
?>