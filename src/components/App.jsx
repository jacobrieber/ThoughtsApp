import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //Array to store notes
  const [notes, setNotes] = useState([]);

  //function to create new note
  function addNote(note) {
    setNotes((prevList) => {
      return [...prevList, note];
    });
  }

  //function to delete note
  function deleteNote(id) {
    setNotes((prevList) => {
      return prevList.filter((noteItem, index) => {
        return index !== id;
      });
    });

    console.log("deleted");
  }

  return (
    <div>
      <Header />
      <CreateArea onceClicked={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key = {index}
            id = {index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
