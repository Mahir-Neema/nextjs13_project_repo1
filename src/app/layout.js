import Header from './components/Header'
import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight:'400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Movie App',
  description: 'Movie App using Next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://cdn.pixabay.com/photo/2013/07/12/14/05/shooting-star-147722_960_720.png" />
      <body className={ubuntu.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
