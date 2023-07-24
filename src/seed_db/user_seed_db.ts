import { User } from "../db/models/user.table";
import { IUser } from "../interfaces/IUser";
import UserService from "../services/user.service";

const users: IUser[] = [
    {
        firstName: 'Luis',
        email: 'luis@gmail.com',
        password: '123'
    },
    {
        firstName: 'Ana',
        email: 'ana@gmail.com',
        password: '123'
    },
    {
        firstName: 'Micaela',
        email: 'micaela@gmail.com',
        password: '123'
    }
]

const instance = new UserService()

export const addUserData = async ()=>{
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        
        await instance.createNewUserService(element.firstName, element.email, element.password)
    }
}
