import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col flex flex-col justify-between">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout