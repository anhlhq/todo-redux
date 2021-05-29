import { useState } from "react"
import { deleteTodo, editTodo } from '../../Redux/action/todo'

const ListTodo = ({ data, dispatch }) => {

    const handleDelete = (id) => () => {
        const action = deleteTodo({
            id: id
        })
        dispatch(action)
    }

    const RenderItem = ({ value, id }) => {
        const [isEdit, setIdEdit] = useState(false)


        const Edit = ({ id }) => {
            const [valueI, setValueI] = useState(value)

            const handleChange = (e) => {
                e.preventDefault();
                setValueI(e.target.value)
            }

            const handleEdit = (id) => () => {
                const action = editTodo({
                    id: id,
                    value: valueI
                })
                dispatch(action)
            }
            return (
                <div>
                    <input value={valueI} onChange={handleChange}></input>
                    <button onClick={handleEdit(id, valueI)}>Save</button>
                </div>
            )
        }
        return (
            <li>
                {
                    !isEdit
                        ?
                        <div>
                            <p onClick={() => setIdEdit(!isEdit)}>{value} - <button onClick={handleDelete(id)}>Delete</button></p>
                        </div>
                        : <Edit id={id} />
                }
            </li>
        )
    }

    return (<div>
        <h3>List Todos</h3>
        <ul>
            {
                data && data.map((item, index) => (
                    <RenderItem key={index} value={item.value} id={item.id} />
                ))
            }
        </ul>
    </div>)
}

export default ListTodo