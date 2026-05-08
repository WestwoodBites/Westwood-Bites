<?php
include 'data.php'; // 引入数据库连接

// 检查 URL 是否传了 id (例如 delete.php?id=5)
if (isset($_GET["id"])) {
    $id = $conn->real_escape_string($_GET["id"]);

    // 执行删除 SQL 语句
    $sql = "DELETE FROM reservations WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        // 删除成功后跳转回后台页面
        header("Location: admin.php");
        exit;
    } else {
        echo "删除失败: " . $conn->error;
    }
} else {
    echo "未提供要删除的 ID";
}

$conn->close();
?>
