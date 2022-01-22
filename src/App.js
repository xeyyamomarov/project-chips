import "./App.css";
import Chips from "./components/Chips";
import { useEffect, useState } from "react";
const chipsData = [
  { id: 1, value: "Xeyyam"},
  { id: 2, value: "Xeyal" }
];
let i = 2;
function App() {
  const [change, setChange] = useState("");
  const [chipsState, setChipsState] = useState([])
  useEffect(()=>{
    setChipsState(chipsData)
  },[])

  const handleChipsRemove=(item)=>{ 
    const itemIndex=chipsState.findIndex(value=>value===item)
    const chipsClone=[...chipsState]
    chipsClone.splice(itemIndex,1)
    setChipsState(chipsClone)

  }

  return (
    <div className="App">
      <input
        className="input"
        onChange={(e) => {
          setChange(e.target.value);
        }}
        value={change}
      />
      <button
        className="btn"
        onClick={() => {
          i = i +1
         setChipsState([...chipsState, {id: i, value: change}])
        }}
      >
        Click
      </button>
      <Chips chipsData={chipsState}  handleSubmit={handleChipsRemove}/>
    </div>
  );
}

export default App;
