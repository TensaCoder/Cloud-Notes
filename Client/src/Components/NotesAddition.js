import React, { useContext, useState } from 'react';
import NoteContext from '../Context/notes/NoteContext';
import Alert from './Alert';

const NotesAddition = () => {

    // write a function to add a new note to the list
    const context = useContext(NoteContext);
    const { addNotes } = context;

    const [note, setNote] = useState({ title: " ", description: " ", tag: " " });
    const [messages, setMessages] = useState("");
    const [alert, setAlert] = useState(false)

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: [event.target.value] })
        // console.log(note)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (note.title[0].length < 5 || note.description[0].length < 5) {
            // console.log("Handling note addition error")
            // console.log(note.title, note.title[0].length)
            // console.log(note.description, note.description[0].length)

            // Set the alert value to TRUE
            setAlert(true);

            // Check condition and set appropriate error messages
            if (note.title[0].length < 4 && note.description[0].length < 4) {
                setMessages("Minimum length of title and description should be 5")
                // console.log("Inside title and desc error")
            }
            else if (note.description[0].length < 4) {
                setMessages("Minimum length of description should be 5")
                // console.log("Inside desc error")
            }
            else if (note.title[0].length < 4) {
                setMessages("Minimum length of title should be 5")
                // console.log("Inside title error") 
            }

        }
        else {
            // console.log("Note added")
            // Adding Notes
            addNotes(note.title, note.description, note.tag);
            setNote({ title: " ", description: " ", tag: " " })
            setAlert(false)
        }

    }

    return (
        <>
            {/* Alert Component */}
            {alert && <Alert message={messages} setAlert={setAlert} />}

            <div className="container my-3">
                <h3 className='my-4'>Add a Note</h3>
                <form>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={note.title} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag} />
                    </div>


                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Add Note</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NotesAddition