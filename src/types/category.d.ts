interface Category {
    _id?: string,
    name?: string,
    description?: string,
    parentCategory?: string,
    subCategories?: Category[],
    image?: string,
}