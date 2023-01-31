import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from 'react'
export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false)
  
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
        background: ${isDark ? "darkslategray" : "darkkhaki "};
        }
      `}</style>
    </>
  )
}
