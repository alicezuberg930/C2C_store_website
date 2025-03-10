interface Product {
    title?: string,
    description?: string,
    price?: number,
    stock?: number,
    category?: string,
    images?: string[],
    productCode?: string,
    variants?: Variant[] | [],
    // extras
    _id?: string,
    sold?: number,
    seller?: string,
    totalRatings?: number,
    averageRating?: number,
    remainingStock?: number,
    // ratings?: []
    createdAt?: string,
    updatedAt?: string,
    sale?: number
}