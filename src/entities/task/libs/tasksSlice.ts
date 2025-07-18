import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ITask } from "../../task";
import { categoryValues, priorityValues, statusValues } from "../../tag/models/types";

interface ITasksStates {
    tasks: ITask[];
    isLoading: boolean;
    error: string;
}

const initialState: ITasksStates = {
    tasks: [
        {
      id: 0,
      title: "Страница не найдена",
      description: "Необходимо реализовать компонент страницы, который должен высвечиваться при переходе по некорректному url",
      category: categoryValues.FEATURE,
      status: statusValues.DONE,
      priority: priorityValues.HIGH,
      date: Date.now()
    },
    {
      id: 1,
      title: "Потеря позиции скролла",
      description: "После редактирования карточки задачи пользователь вместо того, чтобы увидеть данную карточку в списке задач, видит первые карточки",
      category: categoryValues.BUG,
      status: statusValues.TODO,
      priority: priorityValues.HIGH,
      date: Date.now()
    },
    {
      id: 2,
      title: "Что с архитектурой?",
      description: "Огромное количество непонятных файлов, которые напоминают солянку функционала. Необходимо исправить",
      category: categoryValues.REFACTOR,
      status: statusValues.INPROGRESS,
      priority: priorityValues.LOW,
      date: Date.now()
    },
    {
      id: 3,
      title: "Работа с карточками задач",
      category: categoryValues.FEATURE,
      status: statusValues.INPROGRESS,
      priority: priorityValues.HIGH,
      date: Date.now()
    },
    {
      id: 4,
      title: "Фильтрация задач",
      description: "Небходимо реализовать функционал фильтрации задач по одному или нескольким тегам. Теги могут быть одного типа, но не одного значения",
      category: categoryValues.FEATURE,
      status: statusValues.TODO,
      priority: priorityValues.MEDIUM,
      date: Date.now()
    },
  ],
    isLoading: false,
    error: "",
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>){
          state.tasks.push(action.payload)
        },
        removeTask(state, action: PayloadAction<ITask>){
          const newTask = state.tasks.filter( task => task.id !== action.payload.id )
          state.tasks = newTask
        },
        updateTask(state, action: PayloadAction<ITask>){
          const newDataTask = action.payload;
          const index = state.tasks.findIndex( task => task.id === newDataTask.id);
          if(index < 0){
            return;
          }
          state.tasks[index]= newDataTask
        },

    }
})

export const tasksReducer =  tasksSlice.reducer;