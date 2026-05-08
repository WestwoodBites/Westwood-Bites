<?php
include 'data.php';

// 获取所有数据，最新的在最上面
$sql = "SELECT * FROM reservations ORDER BY created_at DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Westwood Bites - 后台管理</title>
    <style>
        body { font-family: 'Segoe UI', Arial; background: #111; color: white; padding: 30px; }
        h2 { text-align: center; color: #ffcc00; }
        table { width: 100%; border-collapse: collapse; background: #1a1a1a; margin-top: 20px; }
        th { background: #333; color: #ffcc00; padding: 15px; border: 1px solid #444; }
        td { padding: 12px; border: 1px solid #333; text-align: center; font-size: 14px; }
        tr:hover { background: #222; }
        .btn-delete { background: #d9534f; color: white; padding: 5px 10px; text-decoration: none; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>预约管理后台</h2>
    <table>
        <tr>
            <th>姓名</th><th>电话</th><th>邮箱</th><th>日期</th><th>时间</th><th>人数</th><th>备注</th><th>操作</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>" . htmlspecialchars($row["full_name"]) . "</td>
                        <td>" . htmlspecialchars($row["phone_number"]) . "</td>
                        <td>" . htmlspecialchars($row["email"]) . "</td>
                        <td>" . $row["booking_date"] . "</td>
                        <td>" . $row["booking_time"] . "</td>
                        <td>" . $row["guests"] . "</td>
                        <td>" . htmlspecialchars($row["special_requests"]) . "</td>
                        <td><a href='delete.php?id=" . $row["id"] . "' class='btn-delete' onclick='return confirm(\"确定删除?\")'>删除</a></td>
                      </tr>";
            }
        } else {
            echo "<tr><td colspan='8'>暂无数据</td></tr>";
        }
        ?>
    </table>
</body>
</html>
