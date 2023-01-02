import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { store } from "./store";
import { Provider } from "react-redux";
import NewTicket from "./pages/NewTicket";
import PrivateRoute from "./components/PrivateRoute";
import TicketsList from "./pages/TicketsList";
import About from "./pages/About";
import SingleTicket from "./pages/SingleTicket";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main></main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<TicketsList />} />
            </Route>
            <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<SingleTicket />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
