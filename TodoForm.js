import { useState } from "react";
import "./TodoForm.css"

function TodoForm ({onAdd}) {

    const [text, setText] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className="form-input" type="text" value={text} onChange={(event) => {
                setText(event.target.value)
            }}/>
            <button className="form-button">Add</button>
        </form>
    )
}

export default TodoForm;