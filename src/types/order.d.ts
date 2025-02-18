interface Order {
    _id: string,
    amount: string,
    paymentMethod: string,
    createdAt: string,
    deeplink?: string,
    payUrl?: string,
}