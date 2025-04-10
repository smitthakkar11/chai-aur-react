import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1,text:"Hello world"}]
}

function sayHello(){
    console.log("Hello")
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{

        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text,
            }
            state.todos.push(todo)
        },                                                 // addTodo: sayHello,
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
    } 
    //actions property and functions
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer 
