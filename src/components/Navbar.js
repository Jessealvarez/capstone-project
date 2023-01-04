import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //get user from the state -> auth
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="navbar bg-indigo-900 py-8 mb-12 flex justify-between ">
      <Link to="/" className="btn btn-ghost font-bold text-xl ">
        Helpdesk Hero
      </Link>
      <Link to="/about" className="btn btn-ghost font-bold text-xl">
        About
      </Link>

      {user ? (
        <>
          <Link className="btn btn-ghost" onClick={onLogout}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="btn btn-ghost font-bold text-xl">
            Log In
          </Link>
          <Link to="/register" className="btn btn-ghost font-bold text-xl">
            Register
          </Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
