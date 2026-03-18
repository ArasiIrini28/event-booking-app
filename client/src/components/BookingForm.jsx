import React, { useState } from "react";

function BookingForm({ event, onClose, onSubmit, loading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email) {
      setError("Please fill all fields");
      return;
    }

    onSubmit(
      { eventId: event.id, name, email },
      {
        onSuccess: () => {
          alert("🎉 Booking Successful!\nEmail sent!");
          onClose();
        },
        onError: (err) => {
          alert(err.response?.data || "Booking failed");
        },
      }
    );
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Book: {event.title}</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <button onClick={handleSubmit} disabled={loading} style={btn}>
            {loading ? "Booking..." : "Confirm"}
          </button>

          <button onClick={onClose} style={cancelBtn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;

// styles
const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
};

const input = {
  width: "100%",
  margin: "10px 0",
  padding: "8px",
};

const btn = {
  background: "blue",
  color: "white",
  padding: "8px",
  marginRight: "10px",
};

const cancelBtn = {
  background: "red",
  color: "white",
  padding: "8px",
};