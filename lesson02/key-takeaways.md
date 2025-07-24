# REST API
- Request: method - url- header- body
- Response: status code - header- body

**Tại sao cần request body?**

- tách ra giúp server xử lí hiệu quả hơn , mã hoá những gì cần thiết thôi
- vì gửi sang thông tin sẽ được mã hoá hoặc sử dụng phương thức HTTPS giúp chứa nhưgnx thông tin bảo mật trong body
- giảm sai sót giao tiếp giữa client và server

**Những lưu ý khi làm việc với request body**

1. Sử dụng đúng định dạng: trong đó có Json là loại định dạng được sử dụng phổ biến nhất - dễ đọc dễ xử lí , cũng có thể sử dụng XML hoặc Form-data

2. Cần xác thực dữ liệu: thường sử dụng lại API có những trường giống nhau --> thường copy xong, thêm những thông tin thực sự cần thiết vào body -->  giúp loại bỏ những dữ liệu không cần thiết để giảm tải cho server 

3. Mã hoá dữ liệu nhaỵ cảm: không được đặt thông tin trong body, những thông tin nhạy cảm này mà chưa được mã hoá 

4. Kiểm tra lỗi từ server: ví dụ 400 bad request, 500 internal server error

**Response Header**

- Thông tin metadata
- Chứa thông tin quan trọng để trả về response
- Định dạng theo kiểu key-value
ex: Conten - Type: application/json

- TÁC DỤNG
+ cung cấp những thông tin để client có thể xử lí được - body chứa những cái gì - cách tương ứng để xử lí
+ ví dụ: body sẽ chứa: kiểu dữ liệu, encoding, độ dài
+ thiếp lập chính sách bảo mật 
+ quản lí phiên làm việc **cookie**
+ hỗ trợ cross-origin resouce sharing (CORS)

một loại response header phổ biến **cache**: 
client gửi một cục data có thể từ 100 tới 1000 lần, và cục data này sẽ không đổi --> dẫn đến việc vì data này không đổi thì tại sao không lưu sẵn cục data này ở client luôn và tiện thì lấy ra lúc cần --> GIÚP TĂNG TỐC ĐỘ CHAỴ

* trong trường hợp lưu CACHE như vậy nhưng server đổi dữ liệu thì sao? thì lúc này response header  có chứa thông tin CACHE gửi lên server sẽ so sánh dữ liệu giữa client và server có sự khác nhau như nào, nếu khác thì sẽ trả về data mới và tiếp tục lưu lại CACHE

**Request: body**
 - là nội dung chính trả về từ phía server, đây cũng chính là thông tin chính mà phía client yêu cầu
 - truyền tải dữ liệu giữa client và server một cách có cấu trúc
 - cung cấp trạng thái xử lí request

 *Test request body gồm những phần*
1. Kiểm tra cấu trúc : đúng định dạng (json,xml...), đúng schema/cáu trúc dữ liệu, trường mandatory
2. Kiểm tra nội dụng: dữ liệu trả vềm encoding, định dạng số hoặc ngày tháng
3. Kiểm tra xử lí lỗi: error message, error code, stack trace (môi trường dev)
4. Kiêm tra hiệu năng: kích thước response, thời gian trả về và việc nén dữ liệu (gzip, deflate)

## Authentication và Authorization

### Authentication
 là xác thực có hợp lệ để access hay không --> Authorization là sau bước xác thực đó tiến hành phân quyền 

- Những phương thức xác thực người dùng
1. Username/password
2. Session/cookie: dựa trên trạng thái (stateful authentication); 
+ server duy trì trạng thái đăng nhập bằng session
+ client: lưu session ID dưới dạng cookie
--> **túm lại thì sesson lưu ở server còn cookie lưu ở client**
3. Base64 encode/ decode
4. Token (access token): được tạo ra do người dùng đăng nhập hoặc do chính người dùng 
+ Session Tokenn ( dungf trong session-cookie authorization)
+ Bearer Token (dùng trong OAuth 2.0 )
+ JWT (Json Web Token): bearer token theo format header.body.signature
--> dùng token bằng cách đính kèm token trong header hoặc query parameter
- chúng ta có thể refresh token để test

### Authentication

1. Session- Cookie Auth: 
người dùng đăng nhập --> server xử lí và tạo ra session_id (cookie)--> gửi session này về cho client, dự vào session id sẽ đánh giá được ông này có quyền tạo hay không

2. Basic Auth:
dùng phương thức HTTP để xác thực, trong đó thì thông tin đăng nhập bao gồm username và password đã được mã hoá bằng Base64 và gửi trong request
1. client gửi request không có thông tin xác thực --> server phản hồi với **401-unauthorize** --> client gửi lại request  --> 4 kiểm tra thông tin 




