import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="navbar bg-indigo-900 flex space-x-20 ">
      <Link to="/" className="btn btn-ghost font-bold text-xl">
        Helpdesk Hero
      </Link>
      <Link to="/about" className="btn btn-ghost font-bold text-xl">
        About
      </Link>
      <Link to="/register" className="btn btn-ghost font-bold text-xl">
        Register
      </Link>

      <Link to="/login" className="btn btn-ghost font-bold text-xl">
        Log In
      </Link>
    </div>
  );
}

export default Navbar;
