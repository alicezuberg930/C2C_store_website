'use server'
import { MomoRequest } from "@/types/momo";
import axios from "axios"
import crypto from 'crypto'

export const momo = async () => {
    let secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
    //json object send to MoMo endpoint
    const requestBody: MomoRequest = {
        partnerCode: "MOMO",
        partnerName: "Test",
        storeId: "MomoTestStore",
        requestId: String(new Date().getTime()),
        amount: 10000,
        orderId: String(new Date().getTime()),
        orderInfo: "pay with MoMo",
        redirectUrl: "http://localhost:3001/test",
        ipnUrl: "http://localhost:3001/test",
        lang: 'vi',
        requestType: "captureWallet",
        autoCapture: true,
        extraData: 'eyJza3VzIjoiIn0=',
        orderGroupId: '',
        accessKey: 'F8BBA842ECF85',
        // userInfo: {
        //     name: "Nguyen Van A",
        //     phoneNumber: "0999888999",
        //     email: "tien23851@gmail.com"
        // },
        // items: [
        //     {
        //         id: String(new Date().getTime()),
        //         name: "Test",
        //         imageUrl: "https://static.zerochan.net/Rem.%28Re%3AZero%29.full.3918671.png",
        //         price: 12000,
        //         currency: "VND",
        //         quantity: 5,
        //         totalPrice: 60000
        //     }
        // ]
    }
    // sort json object in key ascending order
    const sortedRequestBody: MomoRequest = Object.keys(requestBody).sort().reduce((acc: any, key: string) => {
        acc[key] = requestBody[key as keyof MomoRequest]
        return acc
    }, {})
    //before sign HMAC SHA256 with format
    let excludeKeys: string[] = ["items", "orderGroupId", "autoCapture", "storeId", "partnerName", "lang", "userInfo"]
    let rawSignature = Object.entries(sortedRequestBody).filter(([key]) => !excludeKeys.includes(key)).map(([key, value]) => `${key}=${value}`).join('&')
    let signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');
    requestBody.signature = signature
    delete requestBody.accessKey
    try {
        let res = await axios({
            url: `https://test-payment.momo.vn/v2/gateway/api/create`, method: "POST", timeout: 30000, data: requestBody
        })
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
