import { useParams } from "react-router-dom";
import { taskRouting } from "../../entities";


type taskDetailsPageParams = {
    [taskRouting.taskIdName]: string;
}

export const useTaskId: ()=>number = () => {
    const params = useParams<taskDetailsPageParams>();
    const id =  Number(params[taskRouting.taskIdName]);
    return id;
}