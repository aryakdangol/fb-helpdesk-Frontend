import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./ProfileDetailBar.css";

function ProfileDetailBar() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="profiledetail">
      <div className="profiledetail__image">
        <img src={state.profile_pic} alt="" />
      </div>
      <div className="profileDetail">
        <h3>Customer Detail</h3>
        <div className="profileDetail-item1">
          <h6>First Name</h6>
          <p>{state.first_name}</p>
        </div>
        <div className="profileDetail-item1">
          <h6>Last Name</h6>
          <p>{state.last_name}</p>
        </div>
        <div className="profileDetail-item1"></div>
      </div>
    </div>
  );
}

export default ProfileDetailBar;
