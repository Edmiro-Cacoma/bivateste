'use client'
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
const Social = () => {
    return (
        <div className=" flex w-full items-center gap-x-2">
            <Button size={"lg"} className="w-full" variant={"outline"} onClick={() => { }}>
                <FcGoogle className="h-5 w-5"/>
            </Button>
        </div>
    )
}

export default Social
