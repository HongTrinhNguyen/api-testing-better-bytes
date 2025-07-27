## sửa bài
- có hai cách để tạo ra Basic Auth:
1. Clikc vào Auth trong postman --> select Auth Type = Basic Auth  --> nhập Username + Password --> Postman sẽ làm thay bước mã hoá token từ username và password cho 
2. Vào trang base64encode.org --> nhập theo cú pháp username:password sau đó lấy sẽ đã được encode vào header nhập Key = Authorization, Value = Basic dãy kí tự đã được encode

# POSTMAN
## Kỹ thuật viết testcase (ISTQB)
- Phân vùng tương đương
- Phân tích giá trị biên
- Bảng quyết định
- Chuyển trạng thái
- **Đoán lỗi**
--> cơ bản là việc design testcase bên manual sẽ giống tương  tự như design testcase API, kết quả valid hay invalid sẽ gắn status code tương ứng là được 
