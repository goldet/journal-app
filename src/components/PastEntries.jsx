import React, { useState } from "react";
import "../App.css";


function PastEntries({ entries }) {
    return (
     <div>
       
        {entries.length === 0 ? <h2 className="noEntries flex justify-center gap-6 mt-10">No journal entries yet! 📓</h2> : entries.map((entry, idx) => (
        <div key={idx}>
      <div className="border-solid border-2 border-black-500/50 p-1.5 rounded m-5 text-center">   
       <h1>{entry.journalTitle} </h1>
       <p>{entry.journalBody}</p>
       </div>   
        </div>
        ))}
      </div>
    );
  }
  
  export default PastEntries;