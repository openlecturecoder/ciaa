import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'


export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>

        <Header/>

        {children}

        <Footer/>
        
      </body>

    </html>
  )
}
