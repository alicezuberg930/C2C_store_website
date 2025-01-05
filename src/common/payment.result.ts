export const momoPaymentResult = (code: string) => {
    let description: string = ''
    switch (code) {
        case '0':
            description = 'Thành công.'
            break
        case '10':
            description = 'Hệ thống đang được bảo trì.'
            break
        case '11':
            description = 'Truy cập bị từ chối.'
            break
        case '12':
            description = 'Phiên bản API không được hỗ trợ cho yêu cầu này.'
            break
        case '13':
            description = 'Xác thực doanh nghiệp thất bại.'
            break
        case '20':
            description = 'Yêu cầu sai định dạng.'
            break
        case '21':
            description = 'Yêu cầu bị từ chối vì số tiền giao dịch không hợp lệ.'
            break
        case '22':
            description = 'Số tiền giao dịch không hợp lệ.'
            break
        case '40':
            description = 'RequestId bị trùng.'
            break
        case '41':
            description = 'OrderId bị trùng.'
            break
        case '42':
            description = 'OrderId không hợp lệ hoặc không được tìm thấy.'
            break
        case '43':
            description = 'Yêu cầu bị từ chối vì xung đột trong quá trình xử lý giao dịch.'
            break
        case '45':
            description = 'Trùng ItemId	'
            break
        case '47':
            description = 'Yêu cầu bị từ chối vì thông tin không hợp lệ trong danh sách dữ liệu khả dụng'
            break
        case '98':
            description = 'QR Code tạo không thành công. Vui lòng thử lại sau.'
            break
        case '99':
            description = 'Lỗi không xác định.'
            break
        case '1000':
            description = 'Giao dịch đã được khởi tạo, chờ người dùng xác nhận thanh toán.'
            break
        case '1001':
            description = 'Giao dịch thanh toán thất bại do tài khoản người dùng không đủ tiền.'
            break
        case '1002':
            description = 'Giao dịch bị từ chối do nhà phát hành tài khoản thanh toán.'
            break
        case '1003':
            description = 'Giao dịch bị đã bị hủy.'
            break
        case '1004':
            description = 'Giao dịch thất bại do số tiền thanh toán vượt quá hạn mức thanh toán của người dùng.'
            break
        case '1005':
            description = 'Giao dịch thất bại do url hoặc QR code đã hết hạn.'
            break
        case '1006':
            description = 'Giao dịch thất bại do người dùng đã từ chối xác nhận thanh toán.'
            break
        case '1007':
            description = 'Giao dịch bị từ chối vì tài khoản không tồn tại hoặc đang ở trạng thái ngưng hoạt động.'
            break
        case '1017':
            description = 'Giao dịch bị hủy bởi đối tác.'
            break
        case '1026':
            description = 'Giao dịch bị hạn chế theo thể lệ chương trình khuyến mãi.'
            break
        case '1080':
            description = 'Giao dịch hoàn tiền thất bại trong quá trình xử lý. Vui lòng thử lại trong khoảng thời gian ngắn, tốt hơn là sau một giờ.'
            break
        case '1081':
            description = 'Giao dịch hoàn tiền bị từ chối. Giao dịch thanh toán ban đầu có thể đã được hoàn.'
            break
        case '1088':
            description = 'Giao dịch hoàn tiền bị từ chối. Giao dịch thanh toán ban đầu không được hỗ trợ hoàn tiền.'
            break
        case '2019':
            description = 'Yêu cầu bị từ chối vì orderGroupId không hợp lệ.'
            break
        case '4001':
            description = 'Giao dịch bị từ chối do tài khoản người dùng đang bị hạn chế.'
            break
        case '4002':
            description = 'Giao dịch bị từ chối do tài khoản người dùng chưa được xác thực với C06.'
            break
        case '4100':
            description = 'Giao dịch thất bại do người dùng không đăng nhập thành công.'
            break
        case '7000':
            description = 'Giao dịch đang được xử lý.'
            break
        case '7002':
            description = 'Giao dịch đang được xử lý bởi nhà cung cấp loại hình thanh toán.'
            break
        case '9000':
            description = 'Giao dịch đã được xác nhận thành công.'
            break
    }
    return description
}