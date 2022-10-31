import React from "react";

const TodoList = ({todos,setTodos,setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item,completed: !item.completed}
                }
                return item;
            })
        );
    };

    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleEditTodo = ({id}) => {
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
    };

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}> 
                <input 
                type="text" 
                value={todo.title} 
                className={`list ${todo.completed ? "complete" : ""}`}
                onChange={(event) => event.preventDefault()}
                />
                <div>
                    <button 
                    onClick={()=>handleComplete(todo)}
                    className="button-complete task-button">
                    <i className="fa fa-check-circle"></i>
                    </button>
                    <button
                    onClick={()=>handleEditTodo(todo)} 
                    className="button-edit task-button">
                    <i className="fa fa-edit"></i>
                    </button>
                    <button 
                    onClick={()=> handleDelete(todo)}
                    className="button-delete task-button">
                    <i className="fa fa-trash"></i>
                    </button>
                </div>
                </li>)
            )}
        </div>);
};

export default TodoList;