import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link
      to={url}
      className="btn btn-ghost justify-center lg:max-w-xl place-self-center "
    >
      <FaArrowAltCircleLeft /> Back
    </Link>
  );
};

export default BackButton;
