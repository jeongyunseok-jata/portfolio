import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '정윤석 포트폴리오',
  description: 'jeong yun seok portfolio web!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}

        <footer className='w-full py-7 bg-gray-100'>
          <div className='text-base font-medium text-center text-zinc-500'>Copyright© 2023.DevOn.All rights reserved.</div>
        </footer>        
      </body>
    </html>
  )
}

