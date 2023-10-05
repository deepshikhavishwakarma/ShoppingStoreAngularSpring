export interface Category {
    categoryId?: number,
    categoryName: string,
    categoryThumbnail: string,
    categoryRoute: string
}

export interface User {
    id?: number,
    email: string,
    username: string,
    password: string
}

export interface UserLogin {
    username: string,
    password: string
}
