import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function click() {
    setClicked(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isClicked === true && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />)}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={click}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
        />
        <Zoom in={isClicked ? true : false}>
          <Fab onClick={submitNote}><AddCircleIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
