<?php

// import phpCAS lib
include_once('CAS/CAS.php');

phpCAS::setDebug();

// initialize phpCAS
phpCAS::client(CAS_VERSION_2_0,'cas.utt.fr',443,'cas');



// no SSL validation for the CAS server
phpCAS::setNoCasServerValidation();

// force CAS authentication
phpCAS::forceAuthentication();

// at this step, the user has been authenticated by the CAS server
// and the user's login name can be read with phpCAS::getUser().

// for this test, simply print that the authentication was successfull

	//phpCAS::logout();


// at this step, the user has been authenticated by the CAS server
// and the user's login name can be read with phpCAS::getUser().



// logout if desired
if (isset($_REQUEST['logout'])) {
	phpCAS::logout();
}
$login_ldap = phpCAS::getUser();
/*
if(phpCAS::getUser() != @$_SESSION['login']){
	phpCAS::logout();
$_SESSION['login'] = phpCAS::getUser();
}
// for this test, simply print that the authentication was successfull
$user->setUser( phpCAS::getUser());
*/
?>
