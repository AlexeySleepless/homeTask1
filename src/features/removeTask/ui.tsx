import { DeleteOutlined } from "@ant-design/icons"
import { Button, Popconfirm } from "antd"
import { tasksSlice, useAppDispatch, type ITask } from "../../entities"

export const RemoveTaskButton: React.FunctionComponent<ITask> = (task) => {
    const { removeTask } = tasksSlice.actions;
    const actionTitle = "Удаление задачи";
    const dispatch = useAppDispatch();
    const remove = () => {
        dispatch(removeTask(task))
    };
    
    return(
        <div onClick={e=>{e.stopPropagation()}}>
            <Popconfirm
                title={actionTitle}
                description="Вы уверены, что хотите удалить задачу?"
                onConfirm={remove}
                okText="Да"
                cancelText="Нет"
            >
                <Button aria-label = {actionTitle} size="small" icon={<DeleteOutlined/>} danger/>
            </Popconfirm>
        </div>
    )
}