import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { notesHandler } from "../../../redux/actions/setNotes";

import { ReactComponent as PencilIcon } from "./pencil.svg";
import { ReactComponent as DoneIcon } from "./done.svg";
import { ReactComponent as RemoveIcon } from "./remove.svg";

const Note = ({ id, date, noteBody, lastEdit, noteColor }) => {
  let textAreaValue = null;
  useEffect(() => {
    textAreaValue.focus();
  });

  const dispatch = useDispatch();

  const [readOnly, setReadOnly] = useState(true);
  const [notesText, setNotesText] = useState("");
  const [oldNoteText, setOldNoteText] = useState("");

  const typingHandler = (value) => {
    setNotesText(value);
  };

  const onEditHandler = () => {
    setReadOnly(!readOnly);
    setOldNoteText(notesText);
    if (!readOnly && oldNoteText !== notesText) {
      dispatch(
        notesHandler(id, "PUT", {
          notesBody: notesText,
        })
      );
    }
  };

  const onDeleteHandler = () => {
    dispatch(notesHandler(id, "DELETE"));
  };

  return (
    <li className="notes-item" style={{ backgroundColor: noteColor }}>
      <div className="notes-buttons-wrapper">
        <button onClick={(e) => onEditHandler()} className="btn-editNote">
          {readOnly ? <PencilIcon /> : <DoneIcon />}
        </button>
        <button onClick={(e) => onDeleteHandler()} className="btn-removeNotes">
          <RemoveIcon />
        </button>
      </div>
      <textarea
        ref={(textArea) => {
          textAreaValue = textArea;
        }}
        readOnly={readOnly}
        defaultValue={noteBody}
        onChange={(e) => typingHandler(e.target.value)}
        className="notes-body notes-edit-section"
        name=""
        id=""
        cols="25"
        rows="7"
      />
      <div className="notes-footer">
        <p className="date">
          <span className="edited-props">
            {lastEdit === true ? "last edited" : "Created"}
          </span>
          {date}
        </p>
      </div>
    </li>
  );
};

export default Note;
