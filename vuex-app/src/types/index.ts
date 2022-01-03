export interface SignUpMessage {
    message: string,
    type: 'successful' | 'declined' | 'postponed'
}

export interface SignUpForm {
    username: string,
    sex: string,
    country: string,
    email: string,
    password: string,
    phoneNumber: string
}

export type Currency = '$' | '£' | '¥' | '₽'

export interface Card {
    title: string,
    url: string,
    id: number,
    albumId?: number,
    thumbnailUrl?: string
}