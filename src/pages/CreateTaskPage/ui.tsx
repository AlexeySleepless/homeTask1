import { EmptyTask, TaskForm, type ITask } from "../../entities"
import { useCreateTask, useReturnMainPage } from "../../features";

export const CreateTaskPage: React.FunctionComponent = 
    () => {
    const emptyTask = EmptyTask();
    const createTask = useCreateTask();
    const returnMainPage = useReturnMainPage();
    const onFinish = (newTask: ITask) => {
        const date = Date.now();
        const readyTask: ITask = {...newTask, id: date, date};
        createTask(readyTask);
        returnMainPage()
    }

    return (
        <TaskForm task={emptyTask}
            titleForm="Создание задачи"
            titleSubmitButton="Создать"
            onFinish={onFinish}
            closeForm = {returnMainPage}
        />
    )
}
