import "./TodoFooter.css"

function TodoFooter ({todos, onClearCompleted}) {

  const completedSize =  todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className="footer-body">
            <span className="footer-text">{completedSize}/{todos.length} Completed</span>
            <button className="footer-btn" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter;