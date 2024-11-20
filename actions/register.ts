import dynamic from 'next/dynamic'
'use server';

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "invalid fields!" }
    }

    const { email, password, name } = validatedFields.data;

    const hashedpassword = await bcrypt.hash(password, 10)
    const existingUser = await db.user.findUnique({
        where: {
            email,
        }
    })

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