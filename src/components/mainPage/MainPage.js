import React, { useEffect } from 'react';
import './mainPage.css';

import Note from './note'

import { useSelector, useDispatch } from 'react-redux';
import { notesHandler } from '../../redux/actions/setNotes';

const MainPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(notesHandler('', 'GET',))
    }, []);
  
    const notes = useSelector(({ notes }) => notes.notesList)



    return (
        <main id="main-page">

            <div className="container">
                <ul className="notes-list">
                    {notes.map(note => <Note
                        key={note.id}
                        id={note.id}
                        date={note.date}
                        noteBody={note.noteBody}
                        lastEdit={note.lastEdit}
                        noteColor={note.noteColor}

                    />)}
                </ul>
            </div>

        </main>

    );
}

export default MainPage;
