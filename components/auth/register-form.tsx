'use client'

import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import CardWrapper from './card-wrapper'
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSucess } from "../form-sucess";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";
const RegisterForm = () => {

    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof RegisterSchema>>
        (
        {
        resolver: zodResolver(RegisterSchema),
        defaultValues: { email: "", password: "", name: "" }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            register(values)
                .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
    }
    return (
        <CardWrapper headerLabel='Crie uma conta!' backButtonHref='/auth/login' backButtonLabel='Já possui uma conta ?' >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Edmiro Cacoma" type="text" disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>)} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="meu.email@gmail.com" type="email" disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>)} />

                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" placeholder="******" disabled={isPending} />
                                </FormControl>

                            </FormItem>)} />
                    </div>
                    <FormError message={error} />
                    <FormSucess message={success} />
                    <Button type="submit" className={"w-full"} disabled={isPending}>Criar conta</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm
