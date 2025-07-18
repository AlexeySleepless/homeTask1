import { tasksSlice, useAppDispatch, type ITask } from "../../entities";

export const useUpdateTask = () => {
    const { updateTask } = tasksSlice.actions;
    const dispatch = useAppDispatch();
    const updateFn = (task: ITask) => {
            dispatch(updateTask(task))
    };
    return updateFn;
}