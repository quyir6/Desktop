import "./App.css";
import AppHeader from "./components/AppHeader";
import MessageBox from "./components/MessageBox";
import MessageType from "./components/MessageType";
import { Auth } from "@firebase/auth";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MessageBox />
      <MessageType />
    </div>
  );
}

export default App;
