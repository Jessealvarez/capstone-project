import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import { Link } from "react-router-dom";
import TicketItem from "../components/TicketItem";
import LoadingSpinner from "../components/LoadingSpinner";

function TicketsList() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="relative flex flex-col justify-center">
      <Link
        to="/new-ticket"
        className="btn btn-reverse max-w-sm place-self-center mt-6"
      >
        New Ticket
      </Link>
      <div className="card card-compact w-full p-6 m-auto bg-base-100 ">
        <div className="card-body">
          {tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketsList;
