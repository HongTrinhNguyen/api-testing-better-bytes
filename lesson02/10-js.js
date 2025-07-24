/**
 * Tạo biến chưa tên K-pop idol (bts, blackpink, exo, twice), chương trình hiển thị một bài hát nổi tiếng của nhóm đó. 
 */

let idol = "exo";
switch (idol) {
    case "bts":
        console.log("Nghe ngay 'Dynamite'!");
        break;

    case "blackpink":
        console.log("Thử 'How You Like That' nào!");
        break;

    case "exo":
        console.log("Đừng bỏ lỡ 'Love Shot'!");
        break;

    case "twice":
        console.log("Bật ngay 'The Feels' nào!");
        break;

    default:
        console.log("Unknown idol");
}