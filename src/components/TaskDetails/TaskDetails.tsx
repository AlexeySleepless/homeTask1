import React, { useCallback, useState, type JSX }  from "react";
import { categoryValues, priorityValues, statusValues, type categoryType, type ITask, type priorityType, type statusType } from "../../const";
import classes from './TaskDetails.module.css';
import { Button, Card, Flex, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getCategoryTagValue, getPriorityTagValue, getStatusTagValue, type tagDataModel } from "../../tagsInteraction";
import SelectMemo from "../SelectMemo/SelectMemo";
import { useNavigate } from "react-router-dom";



interface TaskDetailsProps {
    task: ITask;
    update: (task: ITask)=>void;
}
const { Title } = Typography;

/// вопросы про key as
function getOptions<T extends {}>(typeValues: T, getFunction: (value: keyof T) => tagDataModel){
    const keyArray = Object.keys(typeValues);
    return keyArray.map(key=>({
        value: key,
        label: <span>{getFunction(key as keyof T).value}</span>,
    }));
}
const categoryOptions = getOptions(categoryValues, getCategoryTagValue);
const statusOptions = getOptions(statusValues, getStatusTagValue);
const priorityOptions = getOptions(priorityValues, getPriorityTagValue);

const TaskDetails: React.FunctionComponent<TaskDetailsProps> = 
    ({task: initialTask, update}) => {
    const titleString = "Заголовок задачи";
    const descriptionString = "Описание задачи";
    const [task, setTask] = useState<ITask>(initialTask);

    // как это улучшить
    const categoryChange = useCallback(
        (value: categoryType) => {
            setTask({...task, category: value})
        },[]
    )
    const statusChange = useCallback(
        (value: statusType) => {
            setTask({...task, status: value})
        },[]
    )
    const priorityChange = useCallback(
        (value: priorityType) => {
            setTask({...task, priority: value})
        },[]
    )

    const navigate = useNavigate();

    const toMain = () => {
        navigate(-1);
    }
    const applyChanges = () => {
        toMain();
        update(task);
    }
    return(
        
        <Card className={classes.detailsBlock} title="Редактирование задачи">
            <Flex vertical>
                <Title level = {5}>{titleString}</Title>
                <Input 
                    placeholder={titleString}
                    value={task.title}
                    onChange={e=>{setTask({...task, title: e.target.value})}}/>
                <Title level = {5}>{descriptionString}</Title>
                <TextArea
                    showCount
                    value = {task.description}
                    onChange={e=>{setTask({...task, description: e.target.value})}}
                    placeholder={descriptionString} 
                    maxLength={1000}
                    style={{ height: 120, resize: 'none' }}
                />
                <Title level = {5}>Категория</Title>
                <SelectMemo options={categoryOptions} onChange={categoryChange} defaultValue={initialTask.category}/>
                <Title level = {5}>Статус</Title>
                <SelectMemo options={statusOptions} onChange={statusChange} defaultValue={initialTask.status}/>
                <Title level = {5}>Приоритет</Title>
                <SelectMemo options={priorityOptions} onChange={priorityChange} defaultValue={initialTask.priority}/>
                <Flex className={classes.buttonFlex} gap="small" justify="space-between" wrap>
                    <Button className={classes.btn} onClick={toMain}>Отмена</Button>
                    <Button className={classes.btn} onClick={applyChanges}>Сохранить</Button>
                </Flex>
                
            </Flex>
        </Card>
    )
}

export default TaskDetails