import React from "react";
import { useAppSelector } from "../../entities";
import { TaskList } from "../../widgets";

export const TasksPage: React.FunctionComponent = 
    () => {
    const { tasks } = useAppSelector( state => state.tasksReducer );
    return (
        <div>
            <TaskList tasks={tasks}/>
        </div>
    )
}
