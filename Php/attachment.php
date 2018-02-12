<?php
		if(isset($_POST['submit'])){
			
		$name=$_POST['name'];
		$email=$_POST['email'];
		$message=$_POST['message'];
		$msg=$name.$email.$message;
	mail('sajibcs8668@gmail.com','this is our website',$msg)
		}
?>