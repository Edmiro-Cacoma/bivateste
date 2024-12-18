'use server';

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "campos inválidos!" }
    }

    const { email, password, name } = validatedFields.data;

    const hashedpassword = await bcrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email já cadastrado!" }
    }

    await db.user.create({
        data: {
            email,
            password: hashedpassword,
            name,
        }
    })

  
    return { success: "Usuário registrado com sucesso!" }
}