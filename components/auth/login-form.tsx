'use client'

import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import CardWrapper from './card-wrapper'
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({ resolver: zodResolver(LoginSchema), defaultValues: { email: "", password: "" } })
    return (
        <CardWrapper headerLabel='Bem vindo de volta!' backButtonHref='/auth/register' backButtonLabel='Não possui uma conta ?' showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="meu.nome@gmail.com" type="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>)} />

                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" placeholder="******" />
                                </FormControl>

                            </FormItem>)} />
                    </div>

                    <Button type="submit" className={"w-full"}>Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm
