import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./MessageWindow.css";
import MessageWindowBody from "./MessageWindowBody";

function MessageWindow() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="messagewindow">
      <div className="messagewindow__header">
        <h3>
          {state.first_name} {state.last_name}
        </h3>
      </div>
      <hr className="coversation__line" />
      <MessageWindowBody />
    </div>
  );
}

export default MessageWindow;
