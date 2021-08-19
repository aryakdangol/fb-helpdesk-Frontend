import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider/StateProvider";

import SendIcon from "@material-ui/icons/Send";
import MessageBodyUser from "../MessagingWindow/MessageBodyUser";
import MessageBodyCustomer from "../MessagingWindow/MessageBodyCustomer";
import PostBodyUser from "./PostBodyUser";
import PostBodyCustomer from "./PostBodyCustomer";

function PostWindowBody() {
  const [state, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      console.log("FETCHMESSAGE>>", state.commentId);
      let response = await axios.post(
        "https://stark-river-56369.herokuapp.com/userComments",
        {
          id: state.postId,
          commentId: state.commentId,
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
      .post("https://stark-river-56369.herokuapp.com/userComments/reply", {
        userid: messages.from,
        message: text,
        from: "155203489993364",
        postId: state.postId,
      })
      .then(setText(""))
      .catch((e) => console.log(e));
  };

  console.log(messages);

  return (
    <div className="messagewindowbody">
      <div className="messagebody">
        {messages.from === "155203489993364" ? (
          <PostBodyUser key={messages.messageId} message={messages} />
        ) : (
          <PostBodyCustomer key={messages.messageId} message={messages} />
        )}
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

export default PostWindowBody;
