import { createHashRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts/main_layout'
import { Home } from '@/pages/home'

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{
      path: '/',
      element: <Home />,
    }, {
      path: '/2',
      element: <div>[Page 2]</div>,
    }, {
      path: '/3',
      element: <div>[Page 3]</div>,
    }],
  },
  {
    path: '/about',
    element: <div>[Page About]</div>,
  },
])
