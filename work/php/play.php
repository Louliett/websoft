<?php
echo "<h1>Sup</h>\n";

$var = 2;
$msg = "php sucks";

echo "you know... " . $msg . "\n";

$dice = rand(1, 6);

if($dice > 1) {
  echo "<p>noice roll</p>";
}

echo "<br>u rolled a '$dice'.";
