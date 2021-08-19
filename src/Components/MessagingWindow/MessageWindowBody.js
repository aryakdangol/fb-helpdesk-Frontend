import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import MessageBodyCustomer from "./MessageBodyCustomer";
import MessageBodyUser from "./MessageBodyUser";
import SendIcon from "@material-ui/icons/Send";

function MessageWindowBody() {
  const [state, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      let response = await axios.post(
        "https://stark-river-56369.herokuapp.com/userMessage",
        {
          id: state.profileId,
        }
      );

      setMessages(response.data);
    };

    const poll = setInterval(fetchMessage, 5000);
    fetchMessage();
    return () => {
      clearInterval(poll);
    };
  }, []);

  const submitText = (e) => {
    e.preventDefault();
    axios
      .post("https://stark-river-56369.herokuapp.com/userMessage/postMessage", {
        profileId: state.profileId,
        senderId: "155203489993364",
        recipentId: state.profileId,
        text: text,
      })
      .then(setText(""))
      .catch((e) => console.log(e));
  };

  console.log(messages);

  return (
    <div className="messagewindowbody">
      <div className="messagebody">
        {messages.map((message) => (
          <>
            {message.sender.id === "155203489993364" ? (
              <MessageBodyUser key={message.message.mid} message={message} />
            ) : (
              <MessageBodyCustomer
                key={message.message.mid}
                message={message}
              />
            )}
          </>
        ))}
      </div>
      <form action="">
        <div className="chatInput">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
          <button onClick={(e) => submitText(e)}>
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageWindowBody;
