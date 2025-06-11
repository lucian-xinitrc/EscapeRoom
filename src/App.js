import react, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [scene, setScene ] = useState("start");
  const [action, setActions] = useState("room");
  const [duty, setDuties] = useState("default");
  const [locker, openLocker] = useState("locker.png");
  const [lockerLetter, openLockerLetter] = useState(false);
  const [lockerLetterfunc, openLockerLetterfunc] = useState("default");
  
  const [letter, setLetter] = useState(true);
  const [showletter, setShowLetter] = useState(false);
  const [lock, unlockPadlock ] = useState(false);

  const [lockerOpened, setLockerOpened] = useState(false);

  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [input4, setInput4] = useState(false);

  const [inputC1, setInputC1] = useState(false);
  const [inputC2, setInputC2] = useState(false);
  const [inputC3, setInputC3] = useState(false);
  const [inputC4, setInputC4] = useState(false);
  const [inputC5, setInputC5] = useState(false);

  const handleInput1 = (e) => setInput1(e.target.value === "1");
  const handleInput2 = (e) => setInput2(e.target.value === "2");
  const handleInput3 = (e) => setInput3(e.target.value === "0");
  const handleInput4 = (e) => setInput4(e.target.value === "2");

  const handleInputC1 = (e) => setInputC1(e.target.value === "lightblue");
  const handleInputC2 = (e) => setInputC2(e.target.value === "green");
  const handleInputC3 = (e) => setInputC3(e.target.value === "darkblue");
  const handleInputC4 = (e) => setInputC4(e.target.value === "white");
  const handleInputC5 = (e) => setInputC5(e.target.value === "pink");

  useEffect(() => {
    if (input1 && input2 && input3 && input4) {
      setLockerOpened(true);
      setActions("LockerOpened");
      openLockerLetterfunc("showLetter");
    }
  }, [input1, input2, input3, input4]);

  useEffect(() => {
    if (inputC1 && inputC2 && inputC3 && inputC4 && inputC5) {
      setLockerOpened(true);
      setScene("dooropened");
    }
  }, [inputC1, inputC2, inputC3, inputC4, inputC5]);

  function lockerLetterButtons() {
    switch(lockerLetterfunc) {
    case "default":
      return (" ")
    case "showLetter":
      return (
        <button onClick={() => setActions("letterLocker")}>Locker Letter</button>
      )
    default:
      return (
        <div className="scene_background">
              <p>Error</p>
            </div>
      )
    }
  }
  function duties() {
    switch(duty) {
      case "default":
        return (
          <h5>Here will appear tasks</h5>
        )
      case "locker":
        return (
        <>
          <h5>Write the lock combination</h5>
          <div className="center">
            <div className="lockerCode">
              <input
                  type="text"
                  onChange={handleInput1}
                />
                <input
                  type="text"
                  onChange={handleInput2}
                />
                <input
                  type="text"
                  onChange={handleInput3}
                />
                <input
                  type="text"
                  onChange={handleInput4}
                />
              </div>
          </div>
        </>
        )
      case "colors":
        return (
        <>
          <h5 className="title">Fill the plates</h5>
          <div className="center">
          <div className="colorsCode">
            <input
                type="text"
                onChange={handleInputC1}
              />
              <input
                type="text"
                onChange={handleInputC2}
              />
              <input
                type="text"
                onChange={handleInputC3}
              />
              <input
                type="text"
                onChange={handleInputC4}
              />
            <input
                type="text"
                onChange={handleInputC5}
              />
            </div>
          </div>
        </>
        )
      default:
        return (
             <div className="scene_background">
              <p>Error</p>
            </div>
        )
      }
  }
  function actions() {
    switch(action) {
      case "room":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/roomMidnight.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>

          </div>
        )
      case "letter":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/letter.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="letter">
            <h2>Recipes</h2>
            <p>The recipe is simple. I stuck in the pan a little, I know how to fry this.</p>
            <ul>
            <li>The water goes to the way.</li>
            <li>The stars unlock the numerical unknown.</li>
            <li>The knowledge sets you free.</li>
            </ul>
          </div>
          <div className="marginbox">
              <button onClick={() => setActions("room")}>Close</button>
            </div>
          </div>
        )
      case "Bookshelf":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/bookshelf.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="letter">
            <p>Lucian - hmm, interesting names.</p>
            <p>Lucian - What an order of colors?</p>
            <p>Lucian - lightlittleblue, greeneemeralds </p>
            <p>Lucian - darkyblue, whiteyangelwings, pinkyfly</p>
          </div>
          <div className="marginbox">
              <button onClick={() => setActions("room")}>Close</button>
            </div>
          </div>
        )
      case "Locker":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/locker.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
        
          <div className="marginbox">
              <button onClick={() => {
                  setActions("room");
                  setDuties("default");
                }}>Close</button>
            </div>
          </div>
        )
      case "Wall":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/wall.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="marginbox">
              <button onClick={() => {
                  setActions("room");
                  setDuties("default");
                }}>Close</button>
            </div>
          </div>
        )
      case "letterLocker":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/letterLocker.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="story">
            <h5>The story of a princess</h5>
            <p>Somewhere in a kingdom there was a very beautiful princess. LightBlue sky</p>
            <p>She had Greeneyes, DarkyBlue dress, Whitey little vest.</p>
            <p>She had Pinky little clouds that were following here everywhere.</p>
            <p>Little did she knew that a prince was captured somewhere in a room.</p>
            <p>Only her colors could save him. So she sent a little bird on the bed to tell him.</p>
          </div>
          <div className="marginbox">
              <button onClick={() => {
                  setActions("room");
                  setDuties("default");
                }}>Close</button>
            </div>
          </div>
        )
      case "Window":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/window.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="marginbox">
              <button onClick={() => {
                  setActions("room");
                  setDuties("default");
                }}>Close</button>
            </div>
          </div>
        )
      case "LockerOpened":
        return (
          <div className="scenephoto" style={{
            backgroundImage: "url('/images/lockerOpened.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>

          <div className="marginbox">
              <button onClick={() => {
                  setActions("room");
                  setDuties("default");
                }}>Close</button>
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
  function scenes() {
    switch (scene) {
      case "start":
        return (

          <div>
            <h1>Sper sa iti placa puiu</h1>
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
            <p>Lucian is driving to a place in the Scottish's mountain as he decided to take a short vacation.</p>
            <p>Lucian feels tired, he hopes to find some plase to rest.</p>
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
            <p>Lucian - Oh thanks God a place where I can eat and rest</p>
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
            <p>Old man - welcome to our Pub we have the best salmon and chips from this corner of Scotland.</p>
            <p>Lucian - Sure I would love a portion.</p>
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
          <div className="letter">
            <p>Lucian - This salmon is delicious.</p>
            <p>Old man - You can stay here for tonight and start again tomorrow</p>
            <p>Lucian - Thank you very much!</p>
          </div>
            <div className="marginbox">
              <button onClick={() => setScene("room")}>Next</button>
            </div>
          </div>
        )
      case "room":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/seeRoom.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="letter">
          <p>Old man - Here it is your bedroom sir.</p>
            <p>Lucian - Thank you very much for hospitality!</p>
            <p>Old man - If you need anything don't hesitate to reach me.</p>
          </div>
            <div className="marginbox">
              <button onClick={() => setScene("midnight")}>Next</button>
            </div>
          </div>
        )
      case "midnight":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/roomMidnight.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="letter">
          <p>*men noises*</p>
            <p>Lucian - The door is locked where is this old man.</p>
            <p>Lucian - Hellooo</p>
            <p>*men noises*</p>
            <p>Lucian - I should get out of here.</p>
          </div>
            <div className="marginbox">
              <button onClick={() => setScene("actiontable")}>Next</button>
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
          <div className="letter">
          <p>Lucian - whats that.</p>
            <p>*Lucian brings the paper.*</p>
            <p>Lucian - I should get out of here.2</p>
          </div>
            <div className="marginbox">
              <button onClick={() => setScene("actiontable")}>Next</button>
            </div>
          </div>
        )
      case "dooropened":
        return (
          <div className="scene_background" style={{
            backgroundImage: "url('/images/openedDoor.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>
          <div className="letter">
            <p>Lucian - Finally the door is opened and I can go back to my princess</p>
          </div>
            <div className="marginbox">
              <button onClick={() => setScene("end")}>End</button>
            </div>
          </div>
        )
      case "end":
        return (
          <div className="final_scene">
          <div className="image" style={{
            backgroundImage: "url('/images/final.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex"
          }}>

          </div>
          <div className="finalletter">
            <h2>Thank you for playing my bubu.</h2>
            <p>You are my princessss and Thank you that you coloured my life.</p>
            <p>I LOVE YOU SOO MUCHHHHH</p>
          </div>
          </div>
        )
      case "actiontable":
        return (
          <div className="roomActionScene">
          <div className="grid-2">
            <div className="photo">
              {actions()}
            </div>
            <div className="objects">
              <h3 className="topMenu">The objects will appear here.</h3>
              <div className="topMenu">
                <button onClick={() => setActions("letter")}>Letter</button>
                {lockerLetterButtons()}
              </div>
              <div className="topMenu">
              {duties()}
              </div>
            </div>

          </div>
            <div className="actionbuttons">
              <button onClick={() => {
                  setActions("Window");
                  setDuties("default");
                }}>Window</button>
              <button onClick={() => {
                  setActions("Bookshelf");
                  setDuties("default");
                }}>Bookshelf</button>
              <button onClick={() => {
                  setActions("Wall");
                  setDuties("colors");
                }}>Wall</button>
              <button onClick={() => {
                  setActions("Locker");
                  setDuties("locker");
                }}>Locker</button>
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
