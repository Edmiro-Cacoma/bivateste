import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: "Email obrigatório" }),
    password: z.string().min(1, { message: "senha obrigatória" })
})

export const RegisterSchema = z.object({
    email: z.string().email({ message: "Email obrigatório" }),
    password: z.string().min(6, { message: "No minimo 6 caracteres" }),
    name: z.string().min(1, { message: "Nome obrigatório" }),
})

