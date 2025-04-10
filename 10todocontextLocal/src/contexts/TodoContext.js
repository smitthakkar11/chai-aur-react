import { createContext,useContext } from "react";

// Creating a context for managing Todo-related data and functions
export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})




// Custom hook to provide easy access to the TodoContext
export const useTodo = () =>{
    return useContext(TodoContext)
}


// Exporting the Provider component for wrapping the application with TodoContext
export const TodoProvider = TodoContext.Provider