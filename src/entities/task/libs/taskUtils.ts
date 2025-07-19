import { categoryValues, priorityValues, statusValues } from "../../tag/models/types";
import type { ITask } from "../model";

const keyOfTasksStorage = "task";

export function EmptyTask(): ITask{
    return {
        id: Date.now(),
        title: "",
        description: "",
        date: 0,
        category: categoryValues.FEATURE,
        status: statusValues.TODO,
        priority: priorityValues.LOW
    }
}


export function getTaskFromLocalStorage(): ITask[]{
    const storageString = localStorage.getItem(keyOfTasksStorage);
    if(!storageString){
        return [];
    }
    const tasks = JSON.parse(storageString)
    if(!Array.isArray(tasks)){
        return [];
    }
    return tasks
}

export function setTaskLocalStorage(tasks: ITask[]): void{
    const stringifyTasks = JSON.stringify(tasks);
    localStorage.setItem(keyOfTasksStorage, stringifyTasks);
}