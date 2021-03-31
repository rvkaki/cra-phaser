import "./App.css";
import { PureComponent } from "react";
import PhaserGameInstance from "./components/PhaserGameInstance";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <PhaserGameInstance />
      </div>
    );
  }
}

export default App;
