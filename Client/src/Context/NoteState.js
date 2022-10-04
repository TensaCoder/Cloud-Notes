import react from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notes = [
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
    ];
    
    return (
        <NoteContext.Provider value={notes}>
            {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState;