
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import Link from "next/link";


export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center flex-wrap">
      <Card className="w-[300px] sm:w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email"
              type="email"
              placeholder="meuemail@gmail.com" />
          
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
            />
            <Link className="text-right text-xs text-slate-500 hover:underline hover:text-slate-300" href='/forgotpassword'>Forgot Password</Link>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Login</Button>
          <Link href="/signup" className="text-sm text-slate-500 hover:underline hover:text-slate-300">
            Don't have an account? Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
