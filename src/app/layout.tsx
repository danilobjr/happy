import { Nunito } from '@next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const nunitoFont = Nunito({
  style: ['normal'],
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-nunito',
})

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={nunitoFont.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
