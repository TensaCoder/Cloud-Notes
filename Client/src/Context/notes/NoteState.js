// import react from "react";        //check y this is not working
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const initialNotes = [
        {
            _id: "123456",
            title: "My first note",
            description: "This is my first note",
            tag: "personal",
        },
        {
            _id: "1234567",
            title: "My second note",
            description: "This is my second note",
            tag: "work", 
        },
        {
            _id: "1234568",
            title: "My third note",
            description: "This is my third note",
            tag: "work",
        },
        {
            _id: "1234568",
            title: "My third note",
            description: "This is my third note",
            tag: "work",
        },
        {
            _id: "1234568",
            title: "My third note",
            description: "This is my third note",
            tag: "work",
        },
        {
            _id: "1234568",
            title: "My third note",
            description: "This is my third note",
            tag: "work",
        }
    ];

    const [notes, setNotes] = useState(initialNotes);

    const addNotes = (title, description, tag) =>{
        // TODO : API Call

        const note = {
            title: title,
            description: description,
            tag: tag
        }
        setNotes(previousNotes => previousNotes.concat(note));
    }


    return (
        <NoteContext.Provider value={{notes, addNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState;