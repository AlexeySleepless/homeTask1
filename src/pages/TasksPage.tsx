import React, { useState }  from "react";
import TaskList from "../components/TaskList/TaskList";
import type { ITask } from "../const";

interface TaskListProps {
    tasks: ITask[]
}

const TasksPage: React.FunctionComponent<TaskListProps> = 
    ({tasks}) => {
    return (
        <div>
            <TaskList tasks = {tasks}></TaskList>
        </div>
    )
}

export default TasksPage