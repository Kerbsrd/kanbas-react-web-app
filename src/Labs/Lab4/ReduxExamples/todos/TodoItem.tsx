import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }: { todo: { title: String, id: string, description: string } }) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item text-dark">
            <button className="btn btn-primary m-1" onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </button>
            <button className="btn btn-danger m-1" onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </button>
            {todo.title}
        </li>
    );
}
