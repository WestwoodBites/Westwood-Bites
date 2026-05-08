<?php
include 'data.php'; // 引入数据库连接

// 1. 从数据库中查询所有的预约数据，按时间倒序排列（最新的在最上面）
$sql = "SELECT * FROM reservations ORDER BY created_at DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>后台管理 - 预约清单</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
        h2 { color: #333; }
        table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #007bff; color: white; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        tr:hover { background-color: #f1f1f1; }
        .btn-delete { color: #fff; background-color: #dc3545; padding: 5px 10px; text-decoration: none; border-radius: 3px; font-size: 14px; }
        .btn-delete:hover { background-color: #a71d2a; }
        .no-data { padding: 20px; text-align: center; color: #666; }
    </style>
</head>
<body>

    <h2>Westwood Bites - 客户预约管理后台</h2>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th>日期</th>
                <th>时间</th>
                <th>人数</th>
                <th>场合</th>
                <th>特殊要求</th>
                <th>提交时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                // 2. 循环输出每一行数据
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row["id"] . "</td>";
                    echo "<td>" . htmlspecialchars($row["full_name"]) . "</td>";
                    echo "<td>" . htmlspecialchars($row["phone_number"]) . "</td>";
                    echo "<td>" . htmlspecialchars($row["email"]) . "</td>";
                    echo "<td>" . $row["booking_date"] . "</td>";
                    echo "<td>" . $row["booking_time"] . "</td>";
                    echo "<td>" . $row["guests"] . "</td>";
                    echo "<td>" . htmlspecialchars($row["occasion"]) . "</td>";
                    echo "<td>" . htmlspecialchars($row["special_requests"]) . "</td>";
                    echo "<td>" . $row["created_at"] . "</td>";
                    // 这里的删除链接会把 ID 传给 delete.php
                    echo "<td>
                            <a href='delete.php?id=" . $row["id"] . "' 
                               class='btn-delete' 
                               onclick='return confirm(\"确定要删除这条预约吗？\")'>删除</a>
                          </td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='11' class='no-data'>目前没有任何预约信息。</td></tr>";
            }
            ?>
        </tbody>
    </table>

</body>
</html>

<?php
$conn->close(); // 关闭连接
?>
