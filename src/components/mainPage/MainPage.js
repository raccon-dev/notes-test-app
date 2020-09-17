import React, { useEffect } from "react";
import "./mainPage.css";

import Note from "./note";

import { useSelector, useDispatch } from "react-redux";
import { notesHandler } from "../../redux/actions/setNotes";

import LoaderNote from "./NoteLoader";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notesHandler("", "GET"));
  }, []);

  const notes = useSelector(({ notes }) => notes.notesList);
  const loadingStatus = useSelector(({ notes }) => notes.isLoaded);
  const loadingNotes = new Array(notes.length === 0 ? 3 : notes.length)
    .fill(0)
    .map((_, index) => index);

  return (
    <main id="main-page">
      <div className="container">
        <ul className="notes-list">
          {loadingStatus
            ? notes.map((note) => (
                <Note
                  key={note.id}
                  id={note.id}
                  date={note.date}
                  noteBody={note.noteBody}
                  lastEdit={note.lastEdit}
                  noteColor={note.noteColor}
                />
              ))
            : loadingNotes.map((load) => <LoaderNote key={load} />)}
        </ul>
      </div>
    </main>
  );
};
export default MainPage;
