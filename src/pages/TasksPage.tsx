import React, { useState }  from "react";
import TasksList from "../components/TasksList/TasksList";
import type { ITask } from "../const";

interface TaskListProps {
    tasks: ITask[]
}

const TasksPage: React.FunctionComponent<TaskListProps> = 
    ({tasks}) => {
    return (
        <div>
            <TasksList tasks = {tasks}></TasksList>
        </div>
    )
}

export default TasksPage