import React from "react";
import "./Sidebar.css";
import ShareIcon from "@material-ui/icons/Share";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="sidber_icons">
          <ShareIcon />
        </div>
        <div className="sidber_icons active">
          <InboxIcon />
        </div>
        <div className="sidber_icons">
          <PeopleAltIcon />
        </div>
        <div className="sidber_icons">
          <TrendingUpIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
