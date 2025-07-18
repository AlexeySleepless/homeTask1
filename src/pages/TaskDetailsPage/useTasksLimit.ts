import { useParams } from "react-router-dom";
import { taskRouting, useAppSelector, type ITask } from "../../entities";


type taskDetailsPageParams = {
    [taskRouting.taskIdName]: string;
}

export const useTasksLimit: ()=>ITask|undefined = () => {
    const neverId = -1
    const { tasks } = useAppSelector( state => state.tasksReducer );
    const params = useParams<taskDetailsPageParams>();
    const id =  Number(params[taskRouting.taskIdName])??neverId;
    let task: ITask|undefined;
    if(id >= 0){
        task = tasks.find((task => task.id === id))
    }
    return task;
}