export type TRole = 'user' | 'admin'

export type TType = 'regular' | 'subscriber'

export interface IUser {
    firstName:      string,
    lastName:       string | null,
    age:            string | null,
    email:          string,
    password:       string,
    role:           TRole,
    status:         boolean,
    wallet:         number,
    type:           TType
}