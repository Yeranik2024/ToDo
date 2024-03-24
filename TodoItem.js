import "./TodoItem.css"

function TodoItem({todo, onChange, onDelete}) {
return (
    <div className="todo-item">
        <label>
            <input type="checkbox" checked={todo.isCompleted}  onChange={(event) => {
                onChange({
                    ...todo,
                    isCompleted: event.target.checked
                })
            }}/>
            {todo.text}
            
        </label>
        <button onClick={() => {
                onDelete(todo);
            }}>X</button>
    </div>
)
}


export default TodoItem;