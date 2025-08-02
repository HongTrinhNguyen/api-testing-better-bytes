# Tạo biến môi trường
- Khi đưa vào header sẽ lưu tại Value column dưới dạng **{{name of environment variable}}**, hover vào sẽ ra value của biến môi trường này
- Biến môi trường ở cấp độ collection và cấp độ environment: postman sẽ ưu tiên biến môi trường

# Viết testcase cho API
- Tại sao dùng bảng quyết định nhưng mà không giảm được số lượng testcase?
trong trường hợp chúng ta có tổ hợp logic nhiều và phức tạp, bảng quyết định giúp tránh thiếu sót **chứ không phải tối ưu số lương testcase**
+ quay trở lại mục tiêu chính của bảng quyết định: bao phủ toàn bộ tổ hợp điều kiện và hành động
--> bảng quyết định không làm giảm số lượng testcase, nhưng xác định được số lượng chính xác testcase dựa trên bussiness

## dùng kỹ thuật test khi

+ 1/ testcase functioncal: giá trị biên, phân vùng và bảng quyết định
+ 2/ Integration: chuyển trạng thái, bảng quyết định
+ 3/ end to end: tất cả 

## 
có nhiều loại testing, khi nào cần consider data driven testing?

đối với câu hỏi với API testing về mặt security thì test những gì, phương pháp?