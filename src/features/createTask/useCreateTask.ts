import { tasksSlice, useAppDispatch, type ITask } from "../../entities";

export const useCreateTask = () => {
    const { addTask } = tasksSlice.actions;
    const dispatch = useAppDispatch();
    const createFn = (task: ITask) => {
            dispatch(addTask(task))
    };
    return createFn;
}