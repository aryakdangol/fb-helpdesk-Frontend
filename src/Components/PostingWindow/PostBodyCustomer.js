import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import dateformat from "dateformat";

function PostBodyCustomer({ message }) {
  const [state, dispatch] = useStateValue();

  return (
    <div className="messagecustomer">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU"
        alt=""
      />
      <div className="messagecustomerbody">
        <div className="messagecustomer__text">{message.message}</div>
        <div className="messagecustomer__infotext">
          {state.first_name} {state.last_name} •{" "}
          {dateformat(message.timestamp, "yyyy , mmmm, dddd, h:MM")}
        </div>
      </div>
    </div>
  );
}

export default PostBodyCustomer;
