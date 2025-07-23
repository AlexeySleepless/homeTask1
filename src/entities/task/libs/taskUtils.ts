import { categoryValues, priorityValues, statusValues } from "../../tag/models/types";
import type { ITask } from "../model";

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