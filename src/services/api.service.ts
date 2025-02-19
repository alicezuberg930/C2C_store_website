// "use server"
// import { createVNPayDate, getServerIp } from "@/common/utils";
import axioInstance from "@/configs/axios.config";
import { MomoRequest } from "@/types/momo";
import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios"
import crypto from 'crypto'
import qs from "qs"
// import { HashAlgorithm, VNPay } from 'vnpay';
import { toast } from "react-toastify";

export const vnpay = () => {
    // https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=1500000&vnp_Command=pay&vnp_CreateDate=20250113092852&vnp_CurrCode=VND&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=thanh+toan+hoa+don&vnp_OrderType=other&vnp_ReturnUrl=http%3A%2F%2Flocalhost%3A3000%2Fuser%2Fwallet&vnp_TmnCode=QB38NYN8%23&vnp_TxnRef=1736735332523&vnp_Version=2.1.0&vnp_SecureHash=875b722cebc0a0a70af903c1e2adc0472daf529212eadaacbf0360f024a91acc3095fe59f6d665eaaf62805c87eee3c05e3b564677cc11728461c2105910bec0
    // const vnpay = new VNPay({
    //     tmnCode: 'QB38NYN8',
    //     secureSecret: 'ZYUAA5YD6YMHAHPS0EZSVWNZ830H0PEM',
    //     vnpayHost: 'https://sandbox.vnpayment.vn',
    //     testMode: true, // tùy chọn

    //     // hashAlgorithm: HashAlgorithm.SHA256, // tùy chọn
    //     /**
    //      * Sử dụng enableLog để bật/tắt logger
    //      * Nếu enableLog là false, loggerFn sẽ không được sử dụng trong bất kỳ phương thức nào
    //      */
    //     enableLog: true, // tùy chọn
    //     /**
    //      * Hàm `loggerFn` sẽ được gọi để ghi log
    //      * Mặc định, loggerFn sẽ ghi log ra console
    //      * Bạn có thể ghi đè loggerFn để ghi log ra nơi khác
    //      *
    //      * `ignoreLogger` là một hàm không làm gì cả
    //      */
    //     // loggerFn: ignoreLogger, // tùy chọn
    // });
    // let a = vnpay.buildPaymentUrl({
    //     vnp_BankCode: "INTCARD",
    //     vnp_Amount: 15000, vnp_OrderInfo: "thanh toan hoa don", vnp_TxnRef: Date.now().toString(),
    //     vnp_IpAddr: "127.0.0.1", vnp_ReturnUrl: "http://localhost:3000/user/wallet",
    //     vnp_CreateDate: dateFormat(new Date()),
    // })
    // console.log(a);

    const tmnCode = "QB38NYN8";
    const secretKey = "ZYUAA5YD6YMHAHPS0EZSVWNZ830H0PEM";
    const vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    const returnUrl = "http://localhost:3000/user/wallet";
    let vnp_Params: any = {
        vnp_Version: '2.1.0',
        vnp_Command: 'pay',
        vnp_TmnCode: tmnCode,
        vnp_Locale: 'vn',
        vnp_CurrCode: 'VND',
        vnp_TxnRef: Date.now().toString(), // Unique transaction ID
        vnp_OrderInfo: 'thanh toan hoa don',
        vnp_OrderType: 'other',
        vnp_Amount: (12000 * 100), // Amount in VND
        vnp_ReturnUrl: returnUrl,
        vnp_IpAddr: '127.0.0.1', // Replace with your server's IP address
        vnp_CreateDate: new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14),
    };

    // Sort parameters alphabetically
    vnp_Params = Object.keys(vnp_Params).sort().reduce((acc: any, key) => {
        acc[key] = vnp_Params[key];
        return acc;
    }, {});

    //Generate the query string
    const signData = qs.stringify(vnp_Params, { encode: true });
    console.log(signData);
    // return
    // Create HMAC SHA512 signature
    const secureHash = crypto.createHmac('sha512', secretKey).update((signData)).digest('hex');

    // Add the signature to the query string
    const paymentUrl = `${vnpUrl}?${qs.stringify(vnp_Params, { encode: true })}&vnp_SecureHash=${secureHash}`;
    // return paymentUrl;
    console.log(paymentUrl);
}

export const createTransaction = async ({ transaction }: { transaction: Transaction }) => {
    const response = await axioInstance<SingleAPIResponse<Transaction>>({ method: "POST", url: "/transactions", data: transaction })
    return response.data
}

export const getCategories = async () => {
    const response = await axioInstance<ArrayAPIResponse<Category[]>>({ method: 'GET', url: '/categories' })
    return response.data
}

export const getBanners = async () => {
    const response = await axioInstance<ArrayAPIResponse<Banner[]>>({ method: 'GET', url: '/banners' })
    return response.data
}

// Địa chỉ người dùng
export const getDeliveryAddresses = async () => {
    const response = await axioInstance<SingleAPIResponse<DeliveryAddress[]>>({ method: 'GET', url: '/users/delivery/address' })
    return response.data
}

export const createDeliveryAddress = async ({ deliveryAddress }: { deliveryAddress: DeliveryAddress }) => {
    const response = await axioInstance<SingleAPIResponse<DeliveryAddress>>({ method: 'POST', url: '/users/delivery/address', data: deliveryAddress })
    return response.data
}

export const updateDeliveryAddress = async ({ id, deliveryAddress }: { id: string, deliveryAddress: DeliveryAddress }) => {
    const response = await axioInstance<SingleAPIResponse<DeliveryAddress>>({ method: 'PATCH', url: `/users/delivery/address/${id}`, data: deliveryAddress })
    return response.data
}

export const deleteDeliveryAddress = async ({ id }: { id: string }) => {
    const response = await axioInstance<SingleAPIResponse<null>>({ method: 'DELETE', url: `/users/delivery/address/${id}` })
    return response.data
}

export const getProvinces = async () => {
    const response = await axioInstance<SingleAPIResponse<Province[]>>({ method: 'GET', url: `/locations/provinces` })
    return response.data
}

export const getDistricts = async ({ code }: { code: string }) => {
    const response = await axioInstance<SingleAPIResponse<District[]>>({ method: 'GET', url: `/locations/districts/${code}` })
    return response.data
}

export const getWards = async ({ code }: { code: string }) => {
    const response = await axioInstance<SingleAPIResponse<Ward[]>>({ method: 'GET', url: `/locations/wards/${code}` })
    return response.data
}