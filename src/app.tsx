import { RouterProvider } from 'react-router-dom'
import './main.css'
import { router } from './routes'
import { ThemeProvider } from './components/header/theme-provider'


export default function App() {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
     </ThemeProvider>
  )
  
}