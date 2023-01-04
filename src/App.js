import React, { useState } from "react";
import NewEntry from "./components/NewEntry";
import PastEntries from "./components/PastEntries";
import "./App.css";

function App() {
  const [isNewEntryPage, setIsNewEntryPage] = useState(true);
  const [entries, setEntries] = useState([])



  const addEntry = ((newEntry) => {
     setEntries((state) => {
      return [...state, newEntry]
     })
  })


  return (
    <div className="App">
      
      <div className="appViewContainer gap-2 bg-violet-600">
      <div className="scribble flex justify-start">Scribble</div>
      <div className="flex justify-end gap-2 mt-1 mr-1">
      <button className="btn border-solid border-2 border-black-500/50  rounded text-sm hover:bg-white hover:text-black" onClick={() => setIsNewEntryPage(true)}>Add New Entry</button>{" "}
     <button  className="btn border-solid border-2 border-black-500/50  rounded text-sm hover:bg-white hover:text-black" onClick={() => setIsNewEntryPage(false)}>Past Entries</button>
     </div>
     </div>
    {isNewEntryPage &&  (<div><NewEntry addEntry={addEntry}/> </div>)} 
    {!isNewEntryPage && (<div><PastEntries entries={entries}/> </div>)}
    </div>
  );
}

export default App;
