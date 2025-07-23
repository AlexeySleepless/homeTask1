import { isFetchError, tasksApi, type ITask } from "../../entities";

export const useCreateTask = () => {
    const [createTask, processObject] = tasksApi.useCreateTaskMutation();
    const createFn = async (task: ITask) => {
            const date = Date.now();
            const readyTask: ITask = {...task, id: date, date};

            // прокидываем только ошибку соединения
            try{
                await createTask(readyTask).unwrap()
            }catch(err){
                if(isFetchError(err)){
                    throw err;
                }
            }
    };
    return {
        createFn,
        processObject
    };
}