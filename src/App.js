import React, { useState } from "react";
import NewEntry from "./components/NewEntry";
import PastEntries from "./components/PastEntries";
import "./App.css";

function App() {
  const [isNewEntryPage, setIsNewEntryPage] = useState(true);
  const [entries, setEntries] = useState([])

  function handleClick(e) {
    e.preventDefault();
    setIsNewEntryPage(!isNewEntryPage);
    console.log("You clicked submit.");
  }

  const addEntry = ((newEntry) => {
     setEntries((state) => {
      return [...state, newEntry]
     })
  })



  //setEntries(newEntry)

  //function addEntries to entry array

  //onSubmit

  return (
    <div className="App">

      <div className="flex justify-center gap-6 mt-5">
      <button className="border-solid border-2 border-black-500/50 p-1.5 rounded" onClick={handleClick}>Add New Entry</button>{" "}
     <button  className="border-solid border-2 border-black-500/50 p-1.5 rounded" onClick={handleClick}>View Past Entries</button>
     </div>
    {isNewEntryPage &&  (<div>  <NewEntry addEntry={addEntry}/> </div>)} {/* onSubmit={handleSubmit} */}
    {!isNewEntryPage && (<div><PastEntries entries={entries}/> </div>)}
    </div>
  );
}

export default App;
