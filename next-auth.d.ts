import  { type DefaultSession } from "next-auth"
import { UserRole } from "@prisma/client";


export type ExtendUser = DefaultSession["user"] & {
    role: UserRole;
}
declare module "next-auth" {
    interface session {
        user: ExtendUser;
    }
}
