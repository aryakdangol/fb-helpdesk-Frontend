import React, { useState } from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useStateValue } from "../../StateProvider/StateProvider";
import { actionType } from "../../StateProvider/reducer";
function ConversationBarInbox({ inboxInfo }) {
  const [select, setSelect] = useState(false);
  const [state, dispatch] = useStateValue();
  const handleClick = () => {
    if (select) {
      setSelect(false);
      dispatch({
        type: actionType.SET_PROFILE,
        profileId: null,
      });
    } else {
      setSelect(true);
      dispatch({
        type: actionType.SET_PROFILE,
        profileId: inboxInfo.id,
        first_name: inboxInfo.first_name,
        last_name: inboxInfo.last_name,
        profile_pic: inboxInfo.profile_pic,
      });
    }
  };
  return (
    <div className="conversation__inbox">
      <div className="conversation__inboxRow1">
        <div className="conversation__inboxItem1">
          {select ? (
            <CheckBoxIcon onClick={handleClick} />
          ) : (
            <CheckBoxOutlineBlankOutlinedIcon onClick={handleClick} />
          )}
          <div className="conversation__inboxUserInfo">
            <p>
              {inboxInfo.first_name} {inboxInfo.last_name}
            </p>
            <h6>Facebook Mesage</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationBarInbox;
