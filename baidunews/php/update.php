<?php
	session_start();
	$con = mysql_connect('localhost', 'root', '');
	//require 'filter.php';
	if (!$con) {
	die ('连接数据库出错: ' . mysql_error());
	}
	mysql_query("set names 'utf8'"); //数据库输出编码 
	mysql_select_db("newsdata",$con); //打开数据库
	//定义数值
	$newstype =htmlspecialchars(addslashes($_POST['newstype']));
	$newsid=htmlspecialchars(addslashes($_POST['newsid']));
	$newstitle=htmlspecialchars(addslashes($_POST['newstitle']));
	$newsimg=htmlspecialchars(addslashes($_POST['newsimg']));
	$newscontent=htmlspecialchars(addslashes($_POST['newscontent']));
	$newstime=htmlspecialchars(addslashes($_POST['newstime']));
	// echo $_POST['token'];
	$sql ="select * from news";
	if ($_SERVER['REQUEST_METHOD'] == 'POST' and (! isset($_POST['token']) || $_POST['token'] == $_SESSION['token'])) {
		$result="UPDATE `news` SET `newstitle`='$newstitle',`newsimg`='$newsimg',`newscontent`='$newscontent',`newstime`='$newstime' WHERE newsid=$newsid";
		$updateresult=mysql_query($result,$con);
			if(!$updateresult){
				die("修改失败");
			}else{
				echo 'Success';
			}
	} else {
		echo 'csrferror';
		die ();
	}

			
	$selectnews="SELECT `newsid`, `newstype`, `newstitle`, `newsimg`, `newscontent`, `newstime` FROM `news` WHERE newsid=$newsid";
	$printresult=mysql_query($selectnews,$con); //执行查询
	if(!$printresult){
		die("Valid result!");
	}else{
		$arr=array();
		while( $row = mysql_fetch_array($printresult) ){
		    array_push($arr,array(
				"newsid"=>$row['newsid'],
				"newstype"=>$row['newstype'],
				"newstitle"=>$row['newstitle'],
				"newsimg"=>$row['newsimg'],
				"newscontent"=>$row['newscontent'],
				"newstime"=>$row['newstime']
			));
		}
		echo (json_encode($arr));
	}

?>
