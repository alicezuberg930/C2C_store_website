export const formatVND = (n: number): string => {
    const config: Intl.NumberFormatOptions = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }
    const formated = new Intl.NumberFormat('vi-VN', config)
    return formated.format(n)
}

export const formatDate = (): string => {
    const now = new Date()

    // Extract hours and minutes
    const hours = now.getHours().toString().padStart(2, '0') // Add leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, '0') // Add leading zero if necessary

    // Extract day, month, and year
    const day = now.getDate().toString().padStart(2, '0') // Add leading zero if necessary
    const month = (now.getMonth() + 1).toString().padStart(2, '0') // Month is zero-based, add 1
    const year = now.getFullYear()

    // Format the date
    return `${hours}:${minutes} ${day}/${month}/${year}`
}