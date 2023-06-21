import bcrypt from 'bcryptjs'

export const hashPassword = (password: string)=>{

    return bcrypt.hashSync(password)
}

export const validPassword = (user: any, password: string) =>{
    return bcrypt.compareSync( password, user.password!)
}