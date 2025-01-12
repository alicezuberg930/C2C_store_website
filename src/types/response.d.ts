interface ArrayAPIResponse<Type> {
    statusCode: number,
    message: string,
    data?: {
        payload?: Type,
        pageSize?: number,
        totalPages?: number,
        page?: number
    }
}

interface SingleAPIResponse<Type> {
    statusCode?: number,
    message?: string,
    data?: Type
}