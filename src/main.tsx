import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import Cadastro from './Cadastro.tsx'

import Layout from './layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Medicos from './Medicos.tsx'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'cadastro', element: <Cadastro /> },
      { path: 'medicos', element: <Medicos /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)