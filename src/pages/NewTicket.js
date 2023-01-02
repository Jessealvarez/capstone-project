import { useState, useEffect } from "react";
import { useSelector, usedispatch, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import BackButton from "../components/BackButton";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );
  const [name, setName] = useState(user.name);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ category, description }));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-indigo-900 rounded-md shadow-lg lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white ">
          Open a Ticket
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label className="block mb-2 text-md font-medium">
              Customer Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-white bg-indigo-900 border rounded-md "
              value={name}
              disabled
            />
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-md font-medium">Category</label>
            <select
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Billing">Billing</option>
              <option value="UI">UI</option>
              <option value="Bug">Bug</option>
              <option value="Other">Other</option>
            </select>

            <div className="form-group">
              <label className="block mb-2 text-md font-medium">
                Description of Issue...
              </label>
              <textarea
                name="description"
                id="description"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                rows="4"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-6">
              <BackButton url="/" />
              <button
                className="w-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTicket;
