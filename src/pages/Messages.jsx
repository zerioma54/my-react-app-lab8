import React, { useEffect, useState } from "react";
import axios from "axios";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/.netlify/functions/api/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => {
        console.error("Error fetching messages:", err);
        setError(" Failed to load messages.");
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Submitted Messages</h2>
      {error && <p className="text-danger">{error}</p>}
      {messages.length === 0 && !error && <p>No messages available.</p>}

      <div className="row">
        {messages.map((msg, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{msg.subject}</h5>
                <p className="card-text">{msg.message}</p>
                <p className="text-muted">— {msg.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;