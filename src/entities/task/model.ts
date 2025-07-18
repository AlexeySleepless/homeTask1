import type { categoryType, priorityType, statusType } from "../tag";


export interface ITask {
    id: number
    title: string;
    description?: string;
    category: categoryType;
    status: statusType;
    priority: priorityType;
    date: number
}
