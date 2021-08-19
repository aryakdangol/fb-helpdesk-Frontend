import React from "react";
import dateformat from "dateformat";

function MessageBodyUser({ message }) {
  return (
    <div className="messageuser">
      <div className="messageuser__body">
        <div className="messageuser_textcontainer">
          <div className="messageuser__text">{message.message.text}</div>
        </div>
        <div className="messageuser__infotext">
          Rich Seller •{" "}
          {dateformat(message.timestamp, "yyyy , mmmm, dddd, h:MM")}
        </div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU"
        alt=""
      />
    </div>
  );
}

export default MessageBodyUser;
