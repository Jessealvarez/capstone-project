import React from "react";

function Home() {
  return (
    <div className="drawer  px-5 py-2.5 mr-2 mb-2">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button ">
          Get Started
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a>Start a New Ticket</a>
          </li>
          <li>
            <a>View Tickets</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
