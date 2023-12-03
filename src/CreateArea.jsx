import React, { useState } from "react";

function CreateArea() {
  const [tittle, setTittle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  function handleChange(event) {
    if (event.target.name === "title") {
      setTittle(event.target.value);
    } else if (event.target.name) {
      setNoteBody(event.target.value);
    }
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
