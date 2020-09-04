import React, { useState } from 'react';

import { useDispatch } from 'react-redux'
import { notesHandler } from '../../../redux/actions/setNotes';


const Note = ({ id, date, noteBody, lastEdit, noteColor }) => {

    const dispatch = useDispatch();

    const [readOnly, setReadOnly] = useState(true);
    const [notesText, setNotesText] = useState('')

    const typingHandler = (value) => {
        setNotesText(value)
    }


    const onEditHandler = () => {
        setReadOnly(!readOnly)
        if (!readOnly) {
            dispatch(notesHandler(id, 'PUT', {
                "notesBody": notesText
            }))
        }
    }
    const onDeleteHandler = () => {
        dispatch(notesHandler(id, 'DELETE'))
    }

    return (
        <li className="notes-item" >
            <div className="notes-buttons-wrapper">
                <button onClick={e => onDeleteHandler()} className="btn-removeNotes">
                    <svg className="remove-icon" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm94.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" /></svg>
                </button>

                <button onClick={e => onEditHandler()} className="btn btn-editNote">
                    <svg className="pencil-icon" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 469.336 469.336">
                        {readOnly ? (
                            <path
                                d="M456.836,76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365,0.031L45.763,301.682
c-1.271,1.282-2.188,2.857-2.688,4.587L0.409,455.73c-1.063,3.722-0.021,7.736,2.719,10.478c2.031,2.033,4.75,3.128,7.542,3.128
c0.979,0,1.969-0.136,2.927-0.407l149.333-42.703c1.729-0.5,3.302-1.418,4.583-2.69l289.323-286.983
c8.063-8.069,12.5-18.787,12.5-30.192S464.899,84.237,456.836,76.168z M285.989,89.737l39.264,39.264L120.257,333.998
l-14.712-29.434c-1.813-3.615-5.5-5.896-9.542-5.896H78.921L285.989,89.737z M26.201,443.137L40.095,394.5l34.742,34.742
L26.201,443.137z M149.336,407.96l-51.035,14.579l-51.503-51.503l14.579-51.035h28.031l18.385,36.771
c1.031,2.063,2.708,3.74,4.771,4.771l36.771,18.385V407.96z M170.67,390.417v-17.082c0-4.042-2.281-7.729-5.896-9.542
l-29.434-14.712l204.996-204.996l39.264,39.264L170.67,390.417z M441.784,121.72l-47.033,46.613l-93.747-93.747l46.582-47.001
c8.063-8.063,22.104-8.063,30.167,0l64,64c4.031,4.031,6.25,9.385,6.25,15.083S445.784,117.72,441.784,121.72z" />
                        )
                            :
                            (
                                <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
                                c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
                                C514.5,101.703,514.499,85.494,504.502,75.496z"/>
                            )}

                    </svg>
                </button>
            </div>
            <textarea readOnly={readOnly} defaultValue={noteBody} onChange={e => typingHandler(e.target.value)} className="notes-body notes-edit-section" name="" id="" cols="25"
                rows="7" />
            <div className="notes-footer">
                <p className="date"> <span className="edited-props">{lastEdit === true ? 'last edited' : 'Created'}</span> {date}</p>

            </div>
        </li>
    );
}

export default Note;
