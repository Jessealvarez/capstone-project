import me from "../images/me.png";

function About() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={me}
          className="max-w-sm rounded-lg shadow-2xl rounded-full"
          alt="me!"
        />
        <div>
          <h1 className="text-5xl font-bold">Hello! I mean-Lorem Ipsum..</h1>
          <p className="mt-2">
            My portfolio can be found{" "}
            <a
              className="font-medium text-sky-500"
              href="http://webdevjesse.com"
            >
              here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
