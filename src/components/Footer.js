import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer p-2 bg-gradient-to-r from-indigo-900 to-purple-900  text-white flex justify-end">
      <button
        onClick={() => navigate("/about")}
        className="block btn btn-ghost  text-lg "
      >
        About
      </button>
    </footer>
  );
}

export default Footer;
