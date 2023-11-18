import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/router'
import '@/i18n'

export const App: React.FC = () => <RouterProvider router={router} />
