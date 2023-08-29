import { ipcRenderer } from "electron";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          ipcRenderer.send("hello");
        }}
      >
        Start
      </button>
    </div>
  );
}

export default App;
