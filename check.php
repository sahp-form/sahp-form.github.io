<?php
ini_set('display_errors','Off'); // отключаем показ ошибок
if ($conn->connect_error) { die("Error" . $conn->connect_error); } // проверка на ошибку подключения

$UID = intval($_POST['UID']); // получаем уникальный ID
$shift_ID = intval($_POST['shift_ID']); // получаем ID крузера
$posx = intval($_POST['posx']); // получаем позицию по X
$posy = intval($_POST['posy']); // получаем позицию по Y
$posz = intval($_POST['posz']); // получаем позицию по Z


if (!empty($UID) & !empty($shift_ID) & !empty($posx))  { // проверяем все вышенаписанное на пустоту
    echo "Успешно"

}
	$result->close();
} else { 
    echo "Не получены данные";
}

$conn->close(); // закрываем коннект

?>
