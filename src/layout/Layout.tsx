import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col justify-start">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout