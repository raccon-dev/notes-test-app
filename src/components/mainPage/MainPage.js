import React, { useEffect } from 'react';
import './mainPage.css';

import Note from './note'

import { useSelector } from 'react-redux';

const MainPage = () => {

    const notes = useSelector(({ notes }) => notes.notesList)
    console.log(notes)

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
