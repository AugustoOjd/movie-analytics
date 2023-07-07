import { object, string } from 'yup';

export const userSchema = object({
    firstName: string().required().min(3).max(15).matches(/^[a-zA-Z ]+$/),
    email: string().email().required().min(3).max(20),
    password: string().required().min(6).max(15)
});