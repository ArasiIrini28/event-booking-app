import React, { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import BookingForm from "./BookingForm";

function EventList() {
  const { events, isLoading, isError, bookEvent, bookingLoading } = useEvents();

  const [selectedEvent, setSelectedEvent] = useState(null);

  if (isLoading) return <h2>Loading events...</h2>;
  if (isError) return <h2>Error loading events</h2>;

  return (
    <div style={gridStyle}>
      {events.map((event) => (
        <div key={event.id} style={cardStyle}>
          <h3>{event.title}</h3>
          <p>📅 {event.date}</p>
          <p>🎟 Seats: {event.availableSeats}</p>

          {event.availableSeats === 0 ? (
            <button disabled style={disabledBtn}>
              Sold Out
            </button>
          ) : (
            <button style={btn} onClick={() => setSelectedEvent(event)}>
              Book Now
            </button>
          )}
        </div>
      ))}

      {selectedEvent && (
        <BookingForm
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onSubmit={bookEvent}
          loading={bookingLoading}
        />
      )}
    </div>
  );
}

export default EventList;

// styles
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "15px",
};

const cardStyle = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const btn = {
  background: "#007bff",
  color: "white",
  border: "none",
  padding: "8px",
  borderRadius: "5px",
  cursor: "pointer",
};

const disabledBtn = {
  background: "gray",
  color: "white",
  border: "none",
  padding: "8px",
  borderRadius: "5px",
};