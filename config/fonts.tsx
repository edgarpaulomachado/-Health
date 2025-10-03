import { Inter, Roboto } from 'next/font/google'

// Fonte principal
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100','200','300','400','500','600','700','800','900'],
})

// Fonte secundária
export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100','300','400','500','700','900'],
})

// Classe utilitária que aplica as variáveis de font ao :root do documento.
// Use no seu layout root: <html className={` ${inter.variable} ${roboto.variable}`}>
export const fontClassNames = `${inter.variable} ${roboto.variable}`

const fonts = {
  inter,
  roboto,
  fontClassNames,
}

export default fonts
