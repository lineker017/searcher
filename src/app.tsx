import { RouterProvider } from 'react-router-dom'
import './main.css'
import { router } from './routes'


export default function App() {
  return (
    <RouterProvider router={router} />

  )
  
}