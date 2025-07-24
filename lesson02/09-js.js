/**
 * Tạo biến chứa số điểm (0 - 100), chương trình hiển thị xếp hạng (newbie, intermediate, pro, legend). 
 */

let score = 45;
let rank;

if (score < 40) {
    rank = "newbie";
} else if (score < 70) {
    rank = "intermediate";
} else if (score < 90) {
    rank = "pro";
} else {
    rank = "legend";
}

switch (rank) {
    case "newbie":
        console.log("Xếp hạng: Newbie");
        break;
    case "intermediate":
        console.log("Xếp hạng: Intermediate");
        break;
    case "pro":
        console.log("Xếp hạng: Pro");
        break;
    case "legend":
        console.log("Xếp hạng: Legend");
        break;

    default:
        console.log("không có rank này");
}