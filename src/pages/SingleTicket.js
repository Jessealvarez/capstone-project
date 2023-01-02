import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import {
  getNotes,
  createNote,
  reset as notesReset,
} from "../features/notes/noteSlice";

import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FaPlus, FaCheck } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import BackButton from "../components/BackButton";
import NoteItem from "../components/NoteItem";

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    background: "darkslateblue",
  },
};

//look into index.html and mount it to root
Modal.setAppElement("#root");

function SingleTicket() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );
  //check for notes
  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
  }, [isError, message, ticketId]);

  //create note submit function
  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketId }));
    console.log("hi from Note Submit");
    closeModal();
  };

  //close ticket
  const onTicketclose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed!");
    navigate("/tickets");
  };
  //open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (isLoading || notesIsLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <h4>Something went wrong.</h4>;
  }
  return (
    <div className="relative flex flex-col justify-center lg:max-w-xl place-self-center">
      <BackButton url="/tickets" />
      <div className="card card-compact w-full p-6 mt-2 m-auto bg-indigo-900 text-white ">
        <h2>Ticket ID: {ticket._id}</h2>
        <span className={`status status-${ticket.status}`}>
          {ticket.status}
        </span>

        <div className="ticket-description">
          <h3>Description:</h3>
          <p>{ticket.description}</p>
        </div>
        {ticket.status !== "closed" && (
          <div className="flex justify-end ticket-options">
            <button onClick={openModal} className="btn mr-4">
              <FaPlus />
              Add Note
            </button>
            <button onClick={onTicketclose} className="btn hover:bg-rose-600">
              <FaCheck />
              Close Ticket
            </button>
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2>Add Note</h2>

        <form onSubmit={onNoteSubmit}>
          <div className="form-group">
            <textarea
              name="noteText"
              id="noteTexxt"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Add note..."
              rows="4"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group mt-2 content-end">
            <button className="btn" type="submit">
              Submit
            </button>
            <button onClick={closeModal} className="btn btn-ghost ">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
      <div>
        {" "}
        <div className="relative flex flex-col justify-center">
          <div className="card card-compact w-full p-6 m-auto  ">
            {notes.map((note) => (
              <NoteItem key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTicket;
