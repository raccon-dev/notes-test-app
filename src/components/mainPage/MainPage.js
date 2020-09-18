import React, { useEffect } from "react";
import "./mainPage.css";

import Note from "./note";

import { useSelector, useDispatch } from "react-redux";
import { notesHandler } from "../../redux/actions/setNotes";

import { ReactComponent as RemoveIcon } from "./note/remove.svg";

import LoaderNote from "./NoteLoader";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notesHandler("", "GET"));
  }, []);

  const { notesList, selectedNotes } = useSelector(({ notes }) => notes);
  const loadingStatus = useSelector(({ notes }) => notes.isLoaded);
  const loadingNotes = new Array(notesList.length === 0 ? 3 : notesList.length)
    .fill(0)
    .map((_, index) => index);

  const onDeleteHandler = () => {
    for (let ss of selectedNotes) {
      dispatch(notesHandler(ss.id, "DELETE"));
    }
  };

  return (
    <main id="main-page">
      <div className="container">
        {selectedNotes.length ? (
          <button
            className="btn-note btn-remove-selected"
            onClick={(e) => onDeleteHandler()}
          >
            <p>Remove Selected</p>
            <RemoveIcon />
          </button>
        ) : (
          ""
        )}
        <ul className="notes-list">
          {loadingStatus
            ? notesList.map((note) => (
                <Note
                  key={note.id}
                  id={note.id}
                  date={note.date}
                  noteBody={note.noteBody}
                  lastEdit={note.lastEdit}
                  noteColor={note.noteColor}
                  selectedNotes={selectedNotes}
                />
              ))
            : loadingNotes.map((load) => <LoaderNote key={load} />)}
        </ul>
      </div>
    </main>
  );
};
export default MainPage;
