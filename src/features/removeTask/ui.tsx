import { DeleteOutlined } from "@ant-design/icons"
import { Button, Popconfirm, Spin } from "antd"
import {  tasksApi, type ITask } from "../../entities"
import { useShowMessageError } from "../showMessageError/useShowMessageError";

export const RemoveTaskButton: React.FunctionComponent<ITask> = (task) => {
    const actionTitle = "Удаление задачи";
    const [deleteTask, {isLoading, error}] = tasksApi.useDeleteTaskMutation();
    const handleRemove = () => {
        deleteTask(task)
    }
    const contextHolder = useShowMessageError(error);
    
    return(
        <div onClick={e=>{e.stopPropagation()}}>
            {contextHolder}
            {
                isLoading
                ?<Spin/>
                :<Popconfirm
                    title={actionTitle}
                    description="Вы уверены, что хотите удалить задачу?"
                    onConfirm={handleRemove}
                    okText="Да"
                    cancelText="Нет"
                >
                    <Button aria-label = {actionTitle} size="small" icon={<DeleteOutlined/>} danger/>
                </Popconfirm>
            }
            
        </div>
    )
}