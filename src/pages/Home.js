import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TicketsList from "./TicketsList";
import Login from "./Login";
function Home() {
  const { user } = useSelector((state) => state.auth);
  return <>{user ? <TicketsList /> : <Login />}</>;
}

export default Home;
