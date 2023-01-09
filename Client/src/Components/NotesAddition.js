import React, {useContext, useState} from 'react';
import NoteContext from "./NoteContext";

const NotesAddition = () => {

    // write a function to add a new note to the list
    const context = useContext(NoteContext);
    const {addNotes} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""});

    const onChange = (event) =>{
        setNote([...note], [event.target.name]:[event.target.value])
    }

    return (
        <>
            {/* Add a bootstrap component to take notes as input from the user */}
            <div className="container my-3">
                <h3>Add a Note</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tag" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Note</button>
                </form>
            </div>
        </>
    )
}

export default NotesAddition