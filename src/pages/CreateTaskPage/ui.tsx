import { EmptyTask, TaskForm, type ITask } from "../../entities"
import { useCreateTask, useReturnMainPage } from "../../features";
import { useShowMessageError } from "../../features/showMessageError/useShowMessageError";

export const CreateTaskPage: React.FunctionComponent = 
    () => {
    const emptyTask = EmptyTask();
    const {createFn, processObject} = useCreateTask();
    const {isLoading, error} = processObject;
    const returnMainPage = useReturnMainPage();
    const onFinish = async (newTask: ITask) => {
        try{
            await createFn(newTask)
            returnMainPage();
        }catch(error){
        }
    }
    const contextHolder = useShowMessageError(error);

    return (
        <>
            {contextHolder}
            <TaskForm task={emptyTask}
                titleForm="Создание задачи"
                titleSubmitButton="Создать"
                onFinish={onFinish}
                closeForm = {returnMainPage}
                isLoading = {isLoading}
            />
        </>
    )
}
