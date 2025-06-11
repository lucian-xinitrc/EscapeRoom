import react, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [scene, setScene ] = useState("start");
  function scenes() {
    switch (scene) {
      case "start":
        return (

          <div>
            <h1>- Escape Room -</h1>
            <h4>Sper sa iti placa puiu</h4>
            <button onClick={() => setScene("forest")}>Next</button>
          </div>
        );
      case "forest":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/road.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
            <p>John is driving to a place in the Scottish's mountain as he decided to take a short vacation.</p>
            <p>John feels tired, he hopes to find some plase to rest.</p>
            <div className="marginbox">
              <button onClick={() => setScene("restaurant")}>Next</button>
            </div>
          </div>
        )
      case "restaurant":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/pub.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
            <p>John - Oh thanks God a place where I can eat and rest</p>
            <div className="marginbox">
              <button>Next</button>
            </div>
          </div>
        )
      default:
        return(
          <div className="scene_background">
            <p>Error</p>
          </div>
        )
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {scenes()}
      </header>
    </div>
  );
}

export default App;
