import "./App.css";
import ConversationBar from "./Components/ConversationBar/ConversationBar";
import MessageWindow from "./Components/MessagingWindow/MessageWindow";
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
      {state.profileId ? <ProfileDetailBar /> : <div></div>}
    </div>
  );
}

export default App;
