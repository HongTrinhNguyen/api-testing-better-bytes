/**
 * Tạo biến chứa tên ngày (blackfriday, cybermonday, christmas), chương trình hiển thị mức giảm giá tương ứng. 
 */

let campaign = "christmas";
switch (campaign) {
    case "blackfriday":
        console.log("Giảm 50% toàn bộ sản phẩm!");
        break;

    case "cybermonday+":
        console.log("Giảm 40% cho sản phẩm công nghệ!");
        break;

    case "christmas":
        console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
        break;
    default:
        console.log("Ưu đãi không tồn tại");

}