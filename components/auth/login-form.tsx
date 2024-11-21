'use client'

import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import CardWrapper from './card-wrapper'
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSucess } from "../form-sucess";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof LoginSchema>>({ resolver: zodResolver(LoginSchema), defaultValues: { email: "", password: "" } })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            login(values)
                .then((data) => {
                    if (data) {
                        setError(data.error);
                        setSuccess(data.success);
                    }
                })
              
        })
    }
    return (
        <CardWrapper headerLabel='Bem vindo de volta!' backButtonHref='/auth/register' backButtonLabel='Não possui uma conta ?' showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="meu.nome@gmail.com" type="email" disabled={isPending} />
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
                    <Button type="submit" className={"w-full"} disabled={isPending}>Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm
