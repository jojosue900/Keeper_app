import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    if (event.target.name) {
      setNote((pre) => {
        return { ...pre, [event.target.name]: event.target.value };
      });
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
        <button
          onClick={(event) => {
            event.preventDefault();
            props.extractNote(note);
          }}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
