import React from 'react'

const NoteItem = (props) => {
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
                        <i className="far fa-trash-alt ms-5 pb-2"></i>
                        <i className="far fa-edit mx-2 pb-2"></i>
                        
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default NoteItem