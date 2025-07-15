import React  from "react";
import type { ITask } from "../../const";
import TaskItem from "../TaskItem/TaskItem";
import classes from "./TasksList.module.css";



interface TasksListProps {
    tasks: ITask[];
}

const TasksList: React.FunctionComponent<TasksListProps> = 
    ({tasks}) => {
    return(
        <div className={classes.grid}>
            {tasks.map(task =>
                <TaskItem key = {task.id} {...task}></TaskItem>
            )}
        </div>
    )
}

export default TasksList