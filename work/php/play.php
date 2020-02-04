<?php
echo "Sup";

$var = 2;
$msg = "php sucks";

echo "my var: " . $var;

$dice = rand(1, 6);

if($die > 1) {
  echo "noice";
}

$lotto = [];

for($i = 1; $i < 7; $i++) {
  $lotto[] = rand(1, 35);
}

echo "<pre>";
var_dump($lotto);
