import React  from "react";
import classes from './TaskForm.module.css';
import { Button, Card, Flex, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { ITask } from "../../model";
import { getCategoryOptions, getPriorityOptions, getStatusOptions } from "../../../tag";
import { SelectTitle, type SelectTitleProps } from "../../../../shared";

interface limitSelect extends SelectTitleProps{
    name: keyof ITask;
}

interface TaskFormProps {
    titleForm: string
    titleSubmitButton: string
    task: ITask;
    onFinish?: ((values: ITask) => void) | undefined
    closeForm?: () => void | undefined
}

export const TaskForm: React.FunctionComponent<TaskFormProps> = 
    ({titleForm, titleSubmitButton, task, onFinish, closeForm}) => {
    const titleString = "Заголовок задачи";
    const descriptionString = "Описание задачи";

    /// Объект task разворачивается в начальные значения формы, поэтому названия элементов формы
    /// должны быть идентичны ключам ITask
    const titleName: keyof ITask = "title";
    const descriptionName: keyof ITask = "description";
    const categorySelect: limitSelect= {
        label: "Категория",
        name: "category",
        options: getCategoryOptions()
    }
    const statusSelect: limitSelect = {
        label: "Статус",
        name: "status",
        options: getStatusOptions()
    }
    const prioritySelect: limitSelect = {
        label: "Приоритет",
        name: "priority",
        options: getPriorityOptions()
    }
    const dataSelect = [categorySelect, statusSelect, prioritySelect];
    return(
        <Card className={classes.detailsBlock} title={titleForm}>
            <Form layout="vertical" onFinish={onFinish} initialValues={{...task}}>
                <Form.Item
                    label={titleString}
                    name={titleName}
                    rules={[{ required: true, message: 'Пожалуйста, введите заголовок задачи!' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={descriptionString}
                    name={descriptionName}
                >
                    <TextArea
                        showCount
                        maxLength={1000}
                        style={{ height: 120, resize: 'none' }}
                    />
                </Form.Item>
                <div className={classes.grid}>
                    {dataSelect.map(data=>(
                        <SelectTitle key={data.name} {...data}/>
                    ))}
                </div>
                <Flex className={classes.buttonFlex} gap="small" justify="space-between" wrap>
                    <Button className={classes.btn} onClick={closeForm}>Отмена</Button>
                    <Form.Item>
                        <Button className={classes.btn} type="primary" htmlType="submit">{titleSubmitButton}</Button>
                    </Form.Item>
                </Flex>
            </Form>
        </Card>
    )
}