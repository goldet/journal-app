import React, { useState } from "react";

function NewEntry({ addEntry }) {
  const [newEntry, setNewEntry] = useState({
    journalTitle: " ",
    journalBody: " ",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
   
    setNewEntry((state) => ({
      ...state,
      [name]: value,
    }));
}

const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(newEntry)
}


  return (
    <div className="NewEntry">
      <h1 className="flex justify-center gap-6 m-10">Add New Entry</h1>
      
      <form onSubmit={handleSubmit} > 
      <div className="flex flex-col">
        <label htmlFor="journalTitle">
          <div className="flex flex-col text-center mx-5">
          Journal Title:
          <input
          className="border-solid border-2 border-black-500/50 p-1.5 rounded"
            name="journalTitle"
            value={newEntry.journalTitle}
            placeholder="Enter Title"
            onChange={handleChange}
            type="text"
          />
          </div>
        </label>

        <label htmlFor="journalBody">
        <div className="flex flex-col text-center m-5">
          Journal Body:
          <textarea
          className="border-solid border-2 border-black-500/50 p-1.5 rounded"
            rows="8"
            name="journalBody"
            value={newEntry.journalBody}
            placeholder="Enter Body"
            onChange={handleChange}
            type="text"
          />
          </div>
        </label>
        <button  className="border-solid border-2 border-black-500/50 p-1.5 rounded mt-5 mx-32"
        type="submit">Submit</button>
        </div>
      </form>
     
    </div>
  );
}

export default NewEntry;
