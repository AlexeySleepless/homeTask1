import { isFetchError, tasksApi, type ITask } from "../../entities";

export const useUpdateTask = () => {
    const [updateTask, processObject] = tasksApi.useUpdateTaskMutation();
    const updateFn = async (task: ITask) => {
        // прокидываем только ошибку соединения
        try{
            await updateTask(task).unwrap()
        }catch(err){
            if(isFetchError(err)){
                throw err;
            }
        }
    };
    return {
        updateFn,
        processObject
    };
}