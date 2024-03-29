import React from 'react'

const Alert = (props) => {
    return (
        <>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {props.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{props.setAlert(false)}}></button>
            </div>
        </>
    )
}

export default Alert