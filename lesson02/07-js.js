/**
 * Tạo biến chứa cấp bậc (bronze, silver, gold, diamond), chương trình hiển thị quyền lợi.
 */

let level = "bronze";
switch (meal) {
    case "bronze":
        console.log("Bạn đang ở cấp bậc thấp nhất!");
        break;

    case "silver":
        console.log("Bạn đã có một số lợi ích!");
        break;

    case "gold":
        console.log("Bạn nhận được nhiều phần thưởng hơn!");
        break;

    case "diamond":
        console.log("Bạn thuộc top người chơi xuất sắc!");
        break;

    default:
        console.log("Cấp bậc khôg hợp lệ");
}