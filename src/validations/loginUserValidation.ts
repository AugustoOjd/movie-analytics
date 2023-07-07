import { object, string } from 'yup';

export const userLoginSchema = object({
    email: string().email().required(),
    password: string().required()
});