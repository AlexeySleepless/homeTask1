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
    const returnPrevPage = useReturnMainPage();
    const onFinish = (changeTask: ITask) => {
        const readyTask: ITask = {...changeTask, id: task.id, date: task.date};
        updateTask(readyTask);
        returnPrevPage()
    }
    console.log(task)
    return (
        <TaskForm task={task}
            titleForm="Редактирование задачи"
            titleSubmitButton="Cохранить"
            onFinish={onFinish}
            closeForm = {returnPrevPage}
        />
    )
}
