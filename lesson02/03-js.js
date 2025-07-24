/**
 * Khai báo biến chứa tên nền tảng (netflix, disney+, hbo, prime) và chương trình hiển thị một bộ phim nổi bật trên nền tảng đó. 
 */

let nenTang = "hbo";
switch (nenTang) {
    case "netflix":
        console.log("Bạn có thể xem 'Stranger Things'!");
        break;

    case "disney+":
        console.log("Thử ngay 'Loki' trên Disney+!");
        break;

    case "hbo":
        console.log("Xem 'Game of Thrones' ngay nào!");
        break;

    case "prime":
        console.log("Bạn có thể xem 'The Boys'!");
        break;

    default:
        console.log("Nền tảng không tồn tại");
}