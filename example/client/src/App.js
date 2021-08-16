import Test from "./Test";
import { WebsocketProvider } from "@hooksplace/socketio";

function App() {
  return (
    <WebsocketProvider token="abcd" url={"http://localhost:3000"}>
      <div className="App">
        <Test />
      </div>
    </WebsocketProvider>
  );
}

export default App;
