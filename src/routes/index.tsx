import { Home } from '@/pages/home'
import { NotFound } from '@/pages/not-found'
import { createBrowserRouter } from 'react-router-dom'


export const router = createBrowserRouter([
  {
    path: '/',
    element:(
      <Home />
    )
  },
  
  {
    path: '*',
    element:(
      <NotFound />
    )
  }
])