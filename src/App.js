import "./App.css";
import ConversationBar from "./Components/ConversationBar/ConversationBar";
import Login from "./Components/Login/Login";
import MessageWindow from "./Components/MessagingWindow/MessageWindow";
import PostWindow from "./Components/PostingWindow/PostWindow";
import ProfileDetailBar from "./Components/ProfileDetailBar/ProfileDetailBar";
import Sidebar from "./Components/Sidebar/Sidebar";

import { useStateValue } from "./StateProvider/StateProvider";

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="App">
      <Sidebar />
      <ConversationBar />
      {state.profileId ? <MessageWindow /> : <div></div>}
      {state.postId ? <PostWindow /> : <div></div>}
      {state.profileId || state.postId ? <ProfileDetailBar /> : <div></div>}
    </div>
  );
}

export default App;
