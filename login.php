<?php
$userinfo = array(
    'user1'=>'password1',
    'user2'=>'password2'
);

if(isset($_GET['logout'])) {
    $_SESSION['username'] = '';
    header('Location:  ' . $_SERVER['PHP_SELF']);
}

if(isset($_POST['username'])) {
    if($userinfo[$_POST['username']] == $_POST['password']) {
        $_SESSION['username'] = $_POST['username'];
    }else {
        //Invalid Login
    }
}
?>
<?php if($_SESSION['username']): ?>
    <?php header('location:http://www.e-toon.fr/BB/index.php?action='.$_GET['action']);?>
<?php endif; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>BB | BicycleBooking</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
    <!--<script src="https://use.fontawesome.com/029b10a003.js"></script>-->

</head>
<body>
<form name="login" action="" method="post" class="login">
    Username:  <input type="text" name="username" value="" /><br />
    Password:  <input type="password" name="password" value="" /><br />
    <input type="submit" name="submit" value="Submit" />
</form>
</body>
</html>
