import create from "zustand";
import { v4 as uuid } from 'uuid';

export const useTodoLIst = create((set) =>({
    todoList: {
        todo: "운동하기",
        id: uuid(),
        complete: false
    },
    
    setTodoList: (value) => {
        set((state) => ({
            todoList: {
                ...state.
            }
        }) )
    }

}))