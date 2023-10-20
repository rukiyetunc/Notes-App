import React from "react";

export default function Sidebar(props) {
  const noteElement = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={
          'title ${note.id === props.currentNote.id ? "selected-note" :""} '
        }
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <button className="delete-btn" onClick={props.deleteNote}>
          <i className="gg-trash trash-icon"></i>
        </button>
        <h4 className="text-snippet">Note {note.body.split("\n")[0]}</h4>
      </div>
    </div>
  ));

  return <div></div>;
}
