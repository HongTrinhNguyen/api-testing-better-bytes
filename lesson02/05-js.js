/**
 * Tạo biến chứa giá trị "dark" hoặc "light", chương trình in ra thông báo thay đổi giao 
 */

let theme = "dark";
switch (theme) {
    case "dark":
        console.log("Chế độ tối đã được bật!");
        break;

    case "light":
        console.log("Chế độ sáng đã được bật!");
        break;

    default:
        console.log("Chế độ không hợp lệ");
}