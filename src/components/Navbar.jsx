import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full  text-xl font-bold text-black">
      <div className={`flex-col md:flex-row gap-x-16 py-4 md:flex`}>
        <Link to="/" className="block text-center">
          Home
        </Link>
        <Link to="/form" className="block text-center">
          Form
        </Link>
        <Link to="/result" className="block text-center">
          Result
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
