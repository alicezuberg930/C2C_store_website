export const formatVND = (n: number) => {
    const config: Intl.NumberFormatOptions = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }
    const formated = new Intl.NumberFormat('vi-VN', config)
    return formated.format(n)
}