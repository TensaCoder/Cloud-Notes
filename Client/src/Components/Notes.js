import React, { useContext } from 'react'
import NotesAddition from './NotesAddition'
import NoteItem from './NoteItem'
import NoteContext from '../Context/notes/NoteContext';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes } = context;
    return (
        <>
            <NotesAddition />

            <div className='container'>
                <hr></hr>
                <h3>Your Notes</h3>
                <div className='container d-flex flex-wrap'>
                    {notes.map((note) => {
                        return <NoteItem note={note} key={note._id} />
                    })}
                </div>

            </div>
            {/* <NoteItem /> */}
        </>
    )
}

export default Notes