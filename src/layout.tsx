import Titulo from '../components/Titulo.tsx'
import Footer from '../components/footer.tsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Titulo />
      <Outlet />
      <Footer/>
    </>
  )
}
