<?php
ini_set('display_errors','Off'); // ��������� ����� ������
if ($conn->connect_error) { die("Error" . $conn->connect_error); } // �������� �� ������ �����������

$UID = intval($_POST['UID']); // �������� ���������� ID
$shift_ID = intval($_POST['shift_ID']); // �������� ID �������
$posx = intval($_POST['posx']); // �������� ������� �� X
$posy = intval($_POST['posy']); // �������� ������� �� Y
$posz = intval($_POST['posz']); // �������� ������� �� Z


if (!empty($UID) & !empty($shift_ID) & !empty($posx))  { // ��������� ��� �������������� �� �������
    echo "�������"

}
	$result->close();
} else { 
    echo "�� �������� ������";
}

$conn->close(); // ��������� �������

?>
