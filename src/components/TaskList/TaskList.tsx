import React, { useState }  from "react";
import type { ITask } from "../../const";
import { Flex } from "antd";
import TaskItem from "../TaskItem/TaskItem";



interface TaskListProps {
    tasks: ITask[];
}

const TaskList: React.FunctionComponent<TaskListProps> = 
    ({tasks}) => {
    return(
        <Flex wrap justify="center">
            {tasks.map(task =>
                <TaskItem key = {task.id} {...task}></TaskItem>
            )}
        </Flex>
    )
}

export default TaskList