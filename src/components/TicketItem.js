import { Link } from "react-router-dom";
import "./ticketStyles.css";

function TicketItem({ ticket }) {
  return (
    <div className="w-full p-6 m-auto bg-indigo-900 rounded-md shadow-lg lg:max-w-xl">
      <div>{new Date(ticket.createdAt).toLocaleString("en-US")}</div>

      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <div
        className={`category text-md font-semibold category-${ticket.status}`}
      >
        {ticket.category}
      </div>
      <div className={`description text-md  description-${ticket.description}`}>
        {ticket.description}
      </div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        {" "}
        View{" "}
      </Link>
    </div>
  );
}

export default TicketItem;
