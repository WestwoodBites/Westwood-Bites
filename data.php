<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "westwoodbites";

// 创建数据库连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 支持中文
$conn->set_charset("utf8mb4");
?>
