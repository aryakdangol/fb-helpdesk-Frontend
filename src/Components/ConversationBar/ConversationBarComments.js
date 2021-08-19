import React, { useState } from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import { actionType } from "../../StateProvider/reducer";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function ConversationBarComments({ postId, postName, inboxInfo }) {
  const [select, setSelect] = useState(false);
  const [state, dispatch] = useStateValue();
  const nameArray = inboxInfo.from.name.split(" ");
  const handleClick = () => {
    if (select) {
      setSelect(false);
      dispatch({
        type: actionType.SET_POST,
        profileId: null,
      });
    } else {
      setSelect(true);
      dispatch({
        type: actionType.SET_POST,
        postId: postId,
        first_name: nameArray[0],
        last_name: nameArray[1],
        commentId: inboxInfo.messageId,
      });
      console.log(state);
    }
  };
  return (
    <div>
      {inboxInfo.canReply ? (
        <div className="conversation__inbox">
          <div className="conversation__inboxRow1">
            <div className="conversation__inboxItem1">
              {select ? (
                <CheckBoxIcon onClick={handleClick} />
              ) : (
                <CheckBoxOutlineBlankOutlinedIcon onClick={handleClick} />
              )}
              <div className="conversation__inboxUserInfo">
                <p>{postName}</p>
                <h6>{inboxInfo.from.name}</h6>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ConversationBarComments;
