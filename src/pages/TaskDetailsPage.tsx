import React, { useState }  from "react";
import type { ITask } from "../const";
import { useParams } from "react-router-dom";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import ErrorPage from "./ErrorPage";

type taskDetailsPageParams = {
    id: string;
}

interface TaskDetailsPageProps {
    tasks: ITask[];
    update: (task: ITask)=>void;
}

const TaskDetailsPage: React.FunctionComponent<TaskDetailsPageProps> = 
    ({tasks, update}) => {
    const neverId = -1
    const params = useParams<taskDetailsPageParams>();
    const id =  Number(params.id)??neverId;
    let task: ITask|undefined;
    if(id >= 0){
        task = tasks.find((task => task.id === id))
    }
    return (
        <div>
            {
                !task
                ?<ErrorPage/>
                :<TaskDetails task = {task} update={update}/>
            }
        </div>
    )
}

export default TaskDetailsPage