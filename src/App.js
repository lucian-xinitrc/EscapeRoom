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
              <button onClick={() => setScene("oldman")}>Next</button>
            </div>
          </div>
        )
      case "oldman":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/oldman.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
            <p>Old man - welcome to our Pub have the best salmon and chips from this corner of Scotland.</p>
            <p>John - Sure I would love a portion.</p>
            <div className="marginbox">
              <button onClick={() => setScene("salmon")}>Next</button>
            </div>
          </div>
        )
      case "salmon":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/salmon.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <p>John - This salmon is delicious.</p>
            <p>Old man - You can stay here for tonight and start again tomorrow</p>
            <p>John - Thank you very much!</p>
            <div className="marginbox">
              <button onClick={() => setScene("room")}>Next</button>
            </div>
          </div>
        )
      case "room":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/room.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <p>Old man - Here it is your bedroom sir.</p>
            <p>Thank you very much for hospitality!</p>
            <p>Old man - If you need anything don't hesitate to reach me.</p>
            <div className="marginbox">
              <button onClick={() => setScene("midnight")}>Next</button>
            </div>
          </div>
        )
      case "midnight":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/salmon.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <p>*men noises*</p>
            <p>John - The door is locked where is this old man.</p>
            <p>John - Hellooo</p>
            <p>*men noises*</p>
            <p>I should get out of here.2</p>
            <div className="marginbox">
              <button onClick={() => setScene("paperonbed")}>Next</button>
            </div>
          </div>
        )
      case "paperonbed":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/salmon.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <p>John - whats that.</p>
            <p>*John brings the paper.*</p>
            <p>I should get out of here.2</p>
            <div className="marginbox">
              <button onClick={() => setScene("paper")}>Next</button>
            </div>
          </div>
        )
      case "paper":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/salmon.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <h2>Recipes</h2>
          <p>The recipe is simple. I stuck in the pan a little, I know how to fry this.</p>
          <ul>
          <li>1 The water goes to the way.</li>
          <li>2 The stars unlock the numerical unknown.</li>
          <li>3 The knowledge sets you free.</li>
          </ul>
            <div className="marginbox">
              <button>Next</button>
            </div>
          </div>
        )
      case "action table":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/salmon.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <h2>Recipes</h2>
          <p>The recipe is simple. I stuck in the pan a little, I know how to fry this.</p>
          <ul>
          <li>1 The water goes to the way.</li>
          <li>2 The stars unlock the numerical unknown.</li>
          <li>3 The knowledge sets you free.</li>
          </ul>
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
