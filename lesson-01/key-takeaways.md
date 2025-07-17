# API la gi?
API là viết tắt của Application Programming Interface; là bộ quy tắc giúp các phần mềm giao tiếp với nhau --> giúp phát triển được hệ thống độc lập và nhanh chóng
*   ví dụ: một hệ thống rất to nhưng mình tách ra nhiều phần riêng lẻ để phát triển thông  qua bộ quy tắc chung là API --> giúp tiết kiêm thời gian

# Tại sao cần test API?

* Đương nhiên sẽ đảm bảo dữ liệu hoạt động như mong đợi
* Những cục tách ra nếu không test sớm phát hiện ra lỗi thì sau khi ghép lại sẽ tốn mất rất nhiều thời gian để fix, có thể dẫn đến toàn bộ hệ thống bị lỗi   
* Đảm bảo hiệu nặng: hoạt động nhanh chóng và ổn định trong mọi điều kiện tải
* Bảo mật --> giúp hạn chế lổ hổng dữ liệu, tránh các cuộc tấn công
ex: khi test frondend không thể nhập được dữ liệu invalid (vd nhập số) phía frontend đã validate rồi; việc test API sẽ đảm bảo tính đúng dắn dữ liệu ở backend mà khi test frontend sẽ không nhìn tháu được

# Các hình thức test API phổ biến?

1/ Functional Testing: đảm bảo API hoạt động đúng như mong đợi
2/ Load Testing: kiểm tra chiụ tải lớn (vd: những ngày sale số lượng người dùng truyc cập tăng thì website phải đảm bảo được độ chiụ trọng tải)
3/ Security testing


# Các loại API phổ biến:

* Web APIs: REST,  SOAP. GRAPHSQL
+ REST API: sử dụng phương thức **HTTP**, GET, POST, PUT  &PATCH, DELETE, đơn giản dễ sử dụng
+ SOAP API: thường dùng cho ngân hàng - vì dữ liệu rất to và được sử dụng trước khi REST API ra đời, sử dụng **XML** để giao tiếp
+ GraphSQL: phản ánh cấu trúc **query** trả về người dùng từ đó dễ hiểu và maintain

* Library/Framework APIs: cung cấp những hàm có sẵn để test

* Operating System APIs: cho phép **tương tác với hệ điều hành**

* Hardware APIs: cho phép giao tiếp giữa phần mềm và phần cứng

# XML - eXtensible Markup Language

 - Đây là ngôn ngữ tự đánh dấu, tự giải thích ( có nghĩa là <person>value person</person> --> inside thông tin person đó )
 - Được chuẩn W3 (www. sáng lập internet) gợi ý dùng

 # JSON - JavaScript Object Notation
 
 - Định dạng text, dùng format của Javascript Object
 - Tự giải thích thông qua các key
 - **key-value**
 - Gọn hơn XML

 * So sánh XML với JSON
 + XML: <name>Phong</name>
 + JSON: {"name": "Phong"}

 # REST API:

  - Mô hình giữa client và server: gửi request lên Server --> get response trả về

## Thành phần request
method - URL - header - body

## Thành phần response
status code - header - body

Tại sao phải tách request và reponse ra nhiều thành phần?
+ Gửi nhận dữ liệu hiệu quả hơn
    kích thước request nhỏ hơn
    server chỉ đọc dữ liệu từ client khi thực sự cần thiết

+ Rõ ràng về ý đinh: giúp client và server hiểu rõ  mỗi thành phần có vai trò cụ thể là gì

+ Mang tính linh hoạt: có thể tuỳ chỉnh và tái sử dụng đúng chổ mà không là rối toàn bộ request

### Method: 
- HTTP method; định nghĩa hành động muốn thực hiện vứoi tài nguyên trên server
Ví dụ: tôi muốn 
+ GET: lấy dữ liệu
+ POST: tạo mới
+ PUT: update toàn bộ
+ PATCH: update một phần
+ DELETE: xoá dữ liệu
+ OPTION:  lấy thông tin về methods
+ HEAD: lấy metadata của resource

### URL: Uniform Resource Locator
htttps://my.bba.com/khoa-học/api-testing? campaign=bba-march$gid=123#course-content

+ https = http + SSL: scheme - giao thức
+ my.bba.com: domain
+ khoa-học/api-testing: path
+ campaign=bba-march$gid=123: query
+ course-content: fragment

### Header
- Gồm có những cặp key-value: truyền tải thông tin bổ sung giữa client và server
ex: Content-Type: application/json

- Nhiều nhóm header: 
    + **Authorization header**: <type> <credentials>
        + chứa thông tin xác thực của client
         Ex: 
        Authorization: Bear Ạhkhihohgo
        Authorization: Basic Dhghgh
        + WWW-Authenticate: server yêu cầu client xác thực
         Ex:
        www-Authenticate: Basic realm="Access to the staging site"
    + **Content headers**: khai báo dữ liệu mà client gửi lên
        Content -Type: application/json
        Content-Length: 348
        Content-Encoding: gzip
    + **Caching Headers**
        + Cache-Control: hiển thị tất cả các caching systems
            ex: no-cache: phải validate trước khi dùng cache
                no-store: hông được cache;
        + Etag: định danh version của resource; dùng cho conditional request
            ex: ETag: "3243432adfdf"
        + Last-Modified: thời điểm resource sửa đổi lần cuối
            ex: Last-Modified: Wed, 21 Oct 2024 07:28:00 GMT

### Body
Dữ liệu trong request body thường gửi gứi dạng JSON, XML hoặc Form-Data

# Response
## Status code: 
+ 1xx/ Infrormational
+ 2xx/ Success
+ 3xx/ Redirection
+ 4xx/ Client error
+ 5xx/ Server error

    