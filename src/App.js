import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './App/Redux/action/todo'
import { useEffect } from 'react'
import { AddTodo, ListTodo } from './App/components/Todo'
const App = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)
    return (
        <div>
            <h1> Todo List Add </h1>
            <AddTodo dispatch={dispatch} addTodo={addTodo} />
            <ListTodo data={todos} dispatch={dispatch} deleteTodo={deleteTodo} />
        </div>
    )
}

export default App