
import { Flavors, Jost } from 'next/font/google'
import "./style/global.scss"




const jost = Jost({ 
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['italic', 'normal'],
  subsets: ['latin'] // Используйте массив строк для subsets
})

export const metadata = {
  title: 'iGadget Zone',
  description: 'Магазин электронной техники iGadget Zone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="App">
        
        
          {children}
          
        
        </div>
      </body>
    </html>
  )
}