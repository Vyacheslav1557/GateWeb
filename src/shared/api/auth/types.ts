interface IUser {
    username: string
}

interface IUserAuth extends IUser {
    password: string
}

interface IToken {
    access_token: string
}

interface IValidation extends IToken, IUser {
}

export type {IUser, IUserAuth, IToken, IValidation};