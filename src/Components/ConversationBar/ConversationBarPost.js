import React, { useState } from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import { actionType } from "../../StateProvider/reducer";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ConversationBarComments from "./ConversationBarComments";

function ConversationBarPost({ inboxInfo }) {
  const [select, setSelect] = useState(false);
  const [state, dispatch] = useStateValue();
  const postId = inboxInfo.postId;
  const postName = inboxInfo.post;

  return (
    <div>
      {inboxInfo.comments.map((comment) => (
        <ConversationBarComments
          postId={postId}
          postName={postName}
          inboxInfo={comment}
        />
      ))}
    </div>
  );
}

export default ConversationBarPost;
