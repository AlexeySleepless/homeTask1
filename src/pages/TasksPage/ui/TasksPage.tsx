import React, { useMemo } from "react";
import { useAppSelector } from "../../../entities";
import { Filters, TaskList } from "../../../widgets";
import { filtrationTasks, ForwardCreateTaskPage } from "../../../features";
import classes from "./TasksPage.module.css"
import { Divider } from "antd";

export const TasksPage: React.FunctionComponent = 
    () => {
    const { tasks } = useAppSelector( state => state.tasksReducer );
    const { filterTags } =useAppSelector( state => state.filterTagsReducer);
    //const filteredTasks = filtrationTasks(tasks, filterTags);
    const filteredTasks = useMemo(()=>filtrationTasks(tasks, filterTags), [tasks, filterTags])
    return (
        <>
            <Filters filterTags={filterTags}/>
            <div className={classes.flex}>
                <ForwardCreateTaskPage/>
            </div>
            <Divider>Задачи: {filteredTasks.length}</Divider>
            <TaskList tasks={filteredTasks}/>
        </>
    )
}
