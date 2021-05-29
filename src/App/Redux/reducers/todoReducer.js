import { createReducer } from '@reduxjs/toolkit'
import { addTodo, deleteTodo, editTodo } from '../action/todo'

let id = 0;

const todoReducer = createReducer([], (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            return [
                ...state,
                {
                    id: ++id,
                    value: action.payload
                }
            ]
        })
        .addCase(deleteTodo, (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        })
        .addCase(editTodo, (state, action) => {
            return state.map(item => item.id === action.payload.id ? { ...item, value: action.payload.value } : item)
        })
})

export default todoReducer