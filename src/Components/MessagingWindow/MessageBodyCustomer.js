import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import dateformat from "dateformat";

function MessageBodyCustomer({ message }) {
  const [state, dispatch] = useStateValue();
  return (
    <div className="messagecustomer">
      <img src={state.profile_pic} alt="" />
      <div className="messagecustomerbody">
        <div className="messagecustomer__text">{message.message.text}</div>
        <div className="messagecustomer__infotext">
          {state.first_name} {state.last_name} •{" "}
          {dateformat(message.timestamp, "yyyy , mmmm, dddd, h:MM")}
        </div>
      </div>
    </div>
  );
}

export default MessageBodyCustomer;
