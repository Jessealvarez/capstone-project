import { useSelector } from "react-redux";

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="w-full p-6 m-auto bg-transparent rounded-md shadow-lg lg:max-w-xl">
      <p>{note.text}</p>
      <div className="note-date text-xs">
        {" "}
        {new Date(note.createdAt).toLocaleString("en-us")}
      </div>
    </div>
  );
}

export default NoteItem;
