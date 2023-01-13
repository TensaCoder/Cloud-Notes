import React, { useContext} from 'react';
import NoteContext from '../Context/notes/NoteContext';


const NoteItem = (props) => {

    const context = useContext(NoteContext);
    const {deleteNote} = context;

    const { note } = props;
    return (
        <>
            {/* display all the notes present*/}
            
            {/* <div className='col-md-3 row-cols-3'> */}
            <div className="col-md-3">
            <div className="card my-3 mx-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        {/* <i className="far fa-trash-alt ms-5 pb-2"></i>
                        <i className="far fa-edit mx-2 pb-2"></i> */}
                        <i className="far fa-trash-alt ms-5 pb-2" onClick={()=>{deleteNote(note._id)}}></i>
                        {/* <i className="far fa-edit mx-2 pb-2" onClick={()=>{updateNote(note)}}></i> */}
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default NoteItem