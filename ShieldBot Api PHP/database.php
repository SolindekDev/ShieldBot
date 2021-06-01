<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bot";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$idof = $_GET['id'];

$sql = "SELECT `osobaid`, `liczbakasy` FROM `ekonomia` WHERE osobaid = $idof";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo json_encode($row);
  }
} else {
  echo "Error: Nie znaleziono podanej osoby w bazie danych";
}
$conn->close();
?>