import me from "../images/me.png";

function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={me}
          className="max-w-sm rounded-lg shadow-2xl rounded-full"
          alt="me!"
        />
        <div>
          <h1 className="text-5xl font-bold">Hello! I mean-Lorem Ipsum..</h1>
          <p className="py-6">
            I'm Jesse, a fledgling Full-Stack Developer and illustrator. I made
            this cool MERN (Mongo, Express, React, & Node.js) stack project with
            the help of Brad Traversy's awesome React and Redux course!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
