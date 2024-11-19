import { LoginButton } from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const font = Poppins({ subsets: ["latin"], weight: ["600"] })
export default async function Home() {


  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-400">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>ꗃ AUTH</h1>
        <p className="text-white text-lg">Authentication Service</p>
      </div>
      <div>
        <LoginButton>
          <Button variant={'secondary'} className='w-full' size={'lg'}>sign in</Button>
        </LoginButton>
        
      </div>
    </main>
  );
}
