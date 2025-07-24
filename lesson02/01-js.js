/*
Khai báo biến result chứa một trong các giá trị (win, draw, lose). In ra thông báo tương ứng với từng loại kết quả. 
*/

let result = "lose";
switch  (result) {
    case "win":
        console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
        break;

    case "draw":
        console.log("Trận đấu hòa, thật đáng tiếc!");
        break;

    case "lose":
        console.log("Thua rồi, nhưng đừng bỏ cuộc!");
        break;

    default:
        console.log("Chưa có kể quả");
}

