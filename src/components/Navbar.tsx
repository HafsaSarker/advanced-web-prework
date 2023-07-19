import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="px-10 py-4">
        <ul className="flex justify-end gap-5 text-indigo-400 ">
            <Link to='/'>
                <li className="hover:text-indigo-300">
                    Home
                </li>
            </Link>
            <Link to='/create'>
                <li className="hover:text-indigo-300">
                    Create
                </li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar