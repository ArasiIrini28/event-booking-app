import React from "react";
import EventList from "../components/EventList";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🎉 Event Booking</h1>
      <EventList />
    </div>
  );
}

export default Home;