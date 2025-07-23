import React from "react";
import { ErrorPage } from "../ErrorPage";
import { useTaskId } from "./useTaskId";
import { TaskForm, tasksApi, type ITask } from "../../entities";
import { useReturnMainPage, useUpdateTask } from "../../features";
import { Spin } from "antd";
import classes from "./TaskDetailsPage.module.css"
import { useShowMessageError } from "../../features/showMessageError/useShowMessageError";

export const TaskDetailsPage: React.FunctionComponent = 
    () => {
    const id = useTaskId();
    const {data: task, isLoading: isLoadingTaskData} = tasksApi.useFetchTaskQuery(id);
    const {updateFn, processObject} = useUpdateTask();
    const {isLoading, error} = processObject;
    const returnMainPage = useReturnMainPage();
    const contextHolder = useShowMessageError(error);
    
    if(isLoadingTaskData){
        return <Spin className={classes.spin}/>
    }

    if(!task){
        return <ErrorPage/>;
    }

    const onFinish = async (changeTask: ITask) => {
        //из формы поступают только поля, которые можно изменить
        const readyTask: ITask = {...changeTask, id: task.id, date: task.date};
        try{
            await updateFn(readyTask);
            returnMainPage();
        }catch(error){

        }
    }

    return (
        <>
            {contextHolder}
            <TaskForm task={task}
                titleForm="Редактирование задачи"
                titleSubmitButton="Cохранить"
                onFinish={onFinish}
                closeForm = {returnMainPage}
                isLoading = {isLoading}
            />
        </>
    )
}
