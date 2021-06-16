<?php

/**
 * The SMTP class has been moved to the wp-includes/PHPMailer subdirectory and now uses the PHPMailer\PHPMailer namespace.
 */
_deprecated_file(
	basename( __FILE__ ),
	'5.5.0',
	WPINC . '/PHPMailer/SMTP.php',
	__( 'The SMTP class has been moved to the wp-includes/PHPMailer subdirectory and now uses the PHPMailer\PHPMailer namespace.' )
);

<<<<<<< HEAD
require_once __DIR__ . '/PHPMailer/SMTP.php';
=======
require __DIR__ . '/PHPMailer/SMTP.php';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

class_alias( PHPMailer\PHPMailer\SMTP::class, 'SMTP' );
