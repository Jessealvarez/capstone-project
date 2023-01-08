import clayme from "../images/clayme.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={clayme}
          className="md:max-w-sm shadow-2xl rounded-full bg-gradient-to-tl from-slate-600 to-indigo-900"
          alt="me!"
        />
        <div>
          <h1 className="text-5xl font-bold">Hello! I mean-Lorem Ipsum..</h1>
          <p className=" leading-8 text-xl">
            My portfolio can be found{" "}
            <a
              className="font-medium text-sky-500"
              href="http://webdevjesse.com"
            >
              here.
            </a>
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn btn-ghost mt-8 border-solid border-2 border-purple-900"
          >
            Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
