/**
 * Tạo biến chứa loại gói (free, premium, family, student), in ra quyền lợi của gói đó
 */

let goi = "free";
switch (goi) {
    case "free":
        console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
        break;

    case "premium":
        console.log("Không quảng cáo, nghe nhạc offline!");
        break;

    case "family":
        console.log("Gói dùng cho nhiều thành viên!");
        break;

    case "student":
        console.log("Ưu đãi dành riêng cho sinh viên!");
        break;
        
    default:
        console.log("Gói không tồn tại");
}