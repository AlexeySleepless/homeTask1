import React, { useMemo } from "react";
import { tasksApi, useAppSelector } from "../../../entities";
import { Filters, TaskList } from "../../../widgets";
import { filtrationTasks, ForwardCreateTaskPage } from "../../../features";
import classes from "./TasksPage.module.css"
import { Divider, Spin } from "antd";

export const TasksPage: React.FunctionComponent = 
    () => {
    const {data: tasks, isLoading} = tasksApi.useFetchAllTasksQuery('',{
        //получаем список задач каждые 5 секунд
        pollingInterval: 5000,
    });
    const { filterTags } =useAppSelector( state => state.filterTagsReducer);
    const filteredTasks = useMemo(()=>{
        const taskArray = tasks || [];
        return filtrationTasks(taskArray, filterTags)
    }, [tasks, filterTags])
    return (
        <>
            <Filters filterTags={filterTags}/>
            <div className={classes.flex}>
                <ForwardCreateTaskPage/>
            </div>
            <Divider>Задачи: {filteredTasks.length}</Divider>
            {isLoading&&<Spin className={classes.spin}/>}
            <TaskList tasks={filteredTasks}/>
        </>
    )
}
