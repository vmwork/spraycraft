<?php

	if (isset($_POST[subject])){

		$subject = $_POST[subject];

		$main_url = $_SERVER['HTTP_HOST'];

		$message = '
		<html>
			<body>';
		$message .= '
				<b>Имя: </b> '.$_POST[name].'<br>
				<b>Телефон: </b> '.$_POST[phone];

		$message .= '
			</body>
		</html>';


		$to = 'spraycraft6@gmail.com';

		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: SprayCraft Admin <noreply@$main_url>\r\n";


		mail($to, $subject, $message, $headers);
	}

?>