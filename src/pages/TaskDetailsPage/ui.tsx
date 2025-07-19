import React from "react";
import { ErrorPage } from "../ErrorPage";
import { useTasksLimit } from "./useTasksLimit";
import { TaskForm, type ITask } from "../../entities";
import { useReturnMainPage, useUpdateTask } from "../../features";

export const TaskDetailsPage: React.FunctionComponent = 
    () => {
    const task = useTasksLimit();
    if(!task){
        return(<ErrorPage/>);
    }
    const updateTask = useUpdateTask();
    const returnMainPage = useReturnMainPage();
    const onFinish = (changeTask: ITask) => {
        const readyTask: ITask = {...changeTask, id: task.id, date: task.date};
        updateTask(readyTask);
        returnMainPage()
    }
    return (
        <TaskForm task={task}
            titleForm="Редактирование задачи"
            titleSubmitButton="Cохранить"
            onFinish={onFinish}
            closeForm = {returnMainPage}
        />
    )
}
