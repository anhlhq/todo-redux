import { useState } from "react";

const AddTodo = ({ addTodo, dispatch }) => {
    const [todo, setTodo] = useState()
    const onChange = (e) => {
        e.preventDefault();

        setTodo(e.target.value)
    }
    const handleAdd = () => {
        const action = addTodo(todo)
        dispatch(action)
    }
    return (
        <div>
            <h3>Add Todo</h3>
            <input name="todo" onChange={onChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTodo