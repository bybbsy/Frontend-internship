export interface SignUpMessage {
    message: string,
    type: 'successful' | 'declined'
}

export interface SignUpForm {
    username: string,
    sex: string,
    country: string,
    email: string,
    password: string,
    phoneNumber: string
}

export type currency = '$' | '£' | '¥' | '₽' 