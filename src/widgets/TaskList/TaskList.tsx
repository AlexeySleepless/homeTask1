import React  from "react";
import classes from "./TaskList.module.css";
import { TaskItem, taskRouting, type ITask } from "../../entities";
import { RemoveTaskButton } from "../../features";
import { useNavigate } from "react-router-dom";



interface TaskListProps {
    tasks: ITask[];
}

export const TaskList: React.FunctionComponent<TaskListProps> = 
    ({tasks}) => {
    const navigate = useNavigate();
    return(
        <div className={classes.grid}>
            {tasks.map(task =>
                <TaskItem
                    key = {task.id}
                    task={task}
                    taskOnClick={()=>{navigate(`${taskRouting.taskPath}/${task.id}`)}}
                    action={<RemoveTaskButton {...task}/>}
                />
            )}
        </div>
    )
}