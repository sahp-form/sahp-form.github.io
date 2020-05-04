<?php
ini_set('display_errors','Off'); // îòêëþ÷àåì ïîêàç îøèáîê
if ($conn->connect_error) { die("Error" . $conn->connect_error); } // ïðîâåðêà íà îøèáêó ïîäêëþ÷åíèÿ

$UID = intval($_POST['UID']); // ïîëó÷àåì óíèêàëüíûé ID
$shift_ID = intval($_POST['shift_ID']); // ïîëó÷àåì ID êðóçåðà
$posx = intval($_POST['posx']); // ïîëó÷àåì ïîçèöèþ ïî X
$posy = intval($_POST['posy']); // ïîëó÷àåì ïîçèöèþ ïî Y
$posz = intval($_POST['posz']); // ïîëó÷àåì ïîçèöèþ ïî Z


if (!empty($UID) & !empty($shift_ID) & !empty($posx))  { // ïðîâåðÿåì âñå âûøåíàïèñàííîå íà ïóñòîòó
    echo $posx
	 $filed = "save.txt";
	 file_put_contents($shift_ID, $rez);

}
	$result->close();
} else { 
    echo $shift_ID;
}

$conn->close(); // çàêðûâàåì êîííåêò

?>
