import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ITask } from "../../task";
import { getTaskFromLocalStorage, setTaskLocalStorage } from "./taskUtils";

interface ITasksStates {
    tasks: ITask[];
    isLoading: boolean;
    error: string;
}

const initialState: ITasksStates = {
    tasks: getTaskFromLocalStorage(),
    isLoading: false,
    error: "",
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>){
          state.tasks.push(action.payload);
          setTaskLocalStorage(state.tasks);
        },
        removeTask(state, action: PayloadAction<ITask>){
          const newTasks = state.tasks.filter( task => task.id !== action.payload.id );
          state.tasks = newTasks;
          setTaskLocalStorage(newTasks);
        },
        updateTask(state, action: PayloadAction<ITask>){
          const newDataTask = action.payload;
          const index = state.tasks.findIndex( task => task.id === newDataTask.id);
          if(index < 0){
            return;
          }
          state.tasks[index]= newDataTask;
          setTaskLocalStorage(state.tasks);
        },

    }
})

export const tasksReducer =  tasksSlice.reducer;