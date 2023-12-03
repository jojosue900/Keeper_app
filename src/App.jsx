import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);
  function extractNote(note) {
    // notes.push(note);
    console.log(note);
    return "Hi";
  }

  return (
    <div>
      <Header />
      <CreateArea extractNote={extractNote} />

      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
