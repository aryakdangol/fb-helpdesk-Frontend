import React from "react";
import NotesIcon from "@material-ui/icons/Notes";
import RefreshIcon from "@material-ui/icons/Refresh";

function ConversationBarHeader() {
  return (
    <div className="conversation__header">
      <div className="conversation__headerItem1">
        <NotesIcon />
        <p>Conversations</p>
      </div>
      <div className="conversation__headerItem2">
        <RefreshIcon />
      </div>
    </div>
  );
}

export default ConversationBarHeader;
