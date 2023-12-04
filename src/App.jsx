import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(index) {
    setNotes((prev) => {
      return prev.filter((item, i) => {
        return i !== index;
      });
    });
  }

  function extractNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
    console.log(notes);
  }

  return (
    <div>
      <Header />
      <CreateArea extractNote={extractNote} />
      {notes.map((note, index) => {
        return (
          <Note
            delete={deleteNote}
            index={index}
            key={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
