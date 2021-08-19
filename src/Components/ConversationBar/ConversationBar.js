import React, { useEffect, useState } from "react";
import "./ConversationBar.css";
import ConversationBarHeader from "./ConversationBarHeader";
import ConversationBarInbox from "./ConversationBarInbox";
import axios from "axios";

function ConversationBar() {
  const [inbox, setInbox] = useState([]);

  useEffect(() => {
    const fetchInbox = async () => {
      try {
        let response = await axios.get("http://localhost:5000/userMessage");
        setInbox(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchInbox();
  }, []);

  return (
    <div className="conversation">
      <ConversationBarHeader />
      <hr className="coversation__line" />

      {inbox.map((chat) => (
        <ConversationBarInbox key={chat.id} inboxInfo={chat} />
      ))}
    </div>
  );
}

export default ConversationBar;
