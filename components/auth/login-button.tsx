'use client';

import { useRouter } from "next/navigation";
import { ReactNode } from "react";


interface LoginButtonProps {
    children: ReactNode;
    mode?: "modal" | "redirect",
}

export const LoginButton = ({ children, mode = "redirect" }: LoginButtonProps) => {
    const router = useRouter();

    const btnClick = () => {
        router.push('auth/login')

    }

    if (mode == "modal") {
        return (<span>Todo: Implement Modal</span>)
    }
    return (
        <span onClick={btnClick} className="cursor-pointer" >
           { children}
        </span>
    )
}