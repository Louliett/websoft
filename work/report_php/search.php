<?php

require "db/config.php";
require "db/db_connection.php";

// Get incoming values
$search = $_GET["search"] ?? null;
$like = "%$search%";

if ($search) {
    // Connect to the database
    $db = connectDatabase($dsn);

    // Prepare and execute the SQL statement
    $sql = <<<EOD
SELECT * FROM tech WHERE
    id = ?
    OR label LIKE ?
    OR type LIKE ?
;
EOD;
    $stmt = $db->prepare($sql);
    $stmt->execute([$search, $like, $like]);

    // Get the results as an array with column names as array keys
    $res = $stmt->fetchAll();
}

?>

<h1>Search the database</h1>

<?php
  $page_title = "Search";
  require __DIR__ . "/views/header.php"
?>

<body>

  <form>
    <p>
        <label>Search:
            <input type="text" name="search" value="<?= $search ?>">
        </label>
    </p>
</form>

</body>

<?php if ($search) : ?>
    <table>
        <tr>
          <th>ID</th>
          <th>Label</th>
          <th>Type</th>
        </tr>

    <?php foreach ($res as $row) : ?>
        <tr>
            <td><?= $row["id"] ?></td>
            <td><?= $row["label"] ?></td>
            <td><?= $row["type"] ?></td>
        </tr>
    <?php endforeach; ?>

    </table>
<?php endif; ?>







<?php require __DIR__ . "/views/footer.php" ?>
