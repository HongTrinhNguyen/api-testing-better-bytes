/**
 * Tạo biến chứa tên phương tiện (bike, car, bus, train), chương trình hiển thị thời gian ước tính để đến nơi. 
 */

let vehicle = "bike";
switch (vehicle) {
    case "bike":
        console.log("Mất khoảng 15 phút");
        break;

    case "car":
        console.log("Mất khoảng 10 phút");
        break;

    case "bus":
        console.log("Mất khoảng 30 phút");
        break;

    case "train":
        console.log("Mất khoảng 45 phút");
        break;

    default:
        console.log("Không tồn tại phương tiện");
}