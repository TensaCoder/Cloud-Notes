// import react from "react";        check y this is not working
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
        {
            _id: "1234567",
            title: "My third note",
            description: "This is my third note",
            tag: "work",
        }
    ];

    return (
        <NoteContext.Provider value={notes}>
            {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState;