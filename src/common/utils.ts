import os from "os"

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

export const createVNPayDate = (): string => {
    const now = new Date()

    // Extract hours and minutes
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    // Extract day, month, and year
    const day = now.getDate().toString().padStart(2, '0')
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const year = now.getFullYear()

    // Format the date
    return `${year}${month}${day}${hours}${minutes}${seconds}`
}

export function getServerIp() {
    const interfaces = os.networkInterfaces();

    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]!) {
            // Skip over non-IPv4 and internal (127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                return net.address; // Return the first found IPv4 address
            }
        }
    }

    return '127.0.0.1'; // Fallback to localhost
}