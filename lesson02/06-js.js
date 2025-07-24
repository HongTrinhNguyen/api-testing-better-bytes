/**
 * Tạo biến chứa tên món (burger, pizza, sushi, taco), chương trình hiển thị giá tiền món đó. 
 */

let meal = "burger";
switch (meal) {
    case "burger":
        console.log("Giá: 5$");
        break;

    case "pizza":
        console.log("Giá: 8$");
        break;

    case "sushi":
        console.log("Giá: 12$");
        break;

    case "taco":
        console.log("Giá: 6$");
        break;

    default:
        console.log("Món khôg tồn tại");
}