import React, { useState }  from "react";
import type { ITask } from "../../const";
import { Button, Card, ConfigProvider, Flex, Tag, Typography } from "antd";
import classes from './TaskItem.module.css';
import { useNavigate } from "react-router-dom";
import { getTasksRoute } from "../../utils";
import { getCategoryTagValue, getPriorityTagValue, getStatusTagValue } from "../../tagsInteraction";


const {Paragraph} = Typography;

const TaskItem: React.FunctionComponent<ITask> = 
    ({
        id,
        title,
        description,
        category,
        status,
        priority,
    }) => {

    const gap = 10;
    const tagModel = [
        getCategoryTagValue(category),
        getStatusTagValue(status),
        getPriorityTagValue(priority),
    ];
    const navigate = useNavigate();

    const toDetails = () => {
        navigate(getTasksRoute(String(id)));
    }

    return(
        <ConfigProvider
        theme={{
                components: {
                    Card: {
                        bodyPaddingSM: gap
                    },
                },
            }}
        >
        <Card title={title} size="small" className={classes.card}>
            <Flex gap={gap} vertical>
                {
                    description
                    ?<Paragraph 
                        ellipsis={{ rows: 3, expandable: false }}
                        style = {{margin: "0"}}
                    >
                        {description}
                    </Paragraph>
                    :description
                }
            
                <Flex wrap gap={gap}>
                    {tagModel.map(({color, value}) =>
                        <Tag key = {value} color={color} className={classes.tag}>
                            {value}
                        </Tag>
                    )}
                </Flex>
                <Flex justify="end">
                     <Button className={classes.btn} onClick={toDetails}>Редактировать</Button>
                </Flex>
            </Flex>
        </Card>
        </ConfigProvider>
    )
}

export default TaskItem