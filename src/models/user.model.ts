import { IUser, TRole, TType } from "../interfaces/IUser";
import { hashPassword } from "../utils/bcryptConfig";

export default class UserModel {
    
    firstName:      string
    lastName:       string | null
    age:            string | null
    email:          string
    password:       string
    role:           TRole
    status:         boolean
    wallet:         number
    type:           TType

    
    constructor(){
        this.firstName=''
        this.lastName=null  
        this.age=null       
        this.email=''     
        this.password=''  
        this.role='user'      
        this.status=true    
        this.wallet=2000    
        this.type='regular'

    }


    createNewUser(firstName: string, email: string, password: string){
        
            const user: IUser = {
                firstName,
                lastName: this.lastName,
                age: this.age,
                email,
                password: hashPassword(password),
                role: this.role,
                status: this.status,
                wallet: this.wallet,
                type: this.type
            }

            return user
    }

}