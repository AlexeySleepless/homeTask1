import React from "react";
import { Divider, Flex, Typography } from "antd";
import classes from './TaskItem.module.css';
import { getTagValue } from "../../../tag";
import type { ITask } from "../../model";
import { dateToString } from "../../libs/dateFormat";
import { AdaptTag } from "../../../../shared";


const {Paragraph, Text, Title} = Typography;
interface ITaskItem {
    task: ITask;
    action?: React.ReactNode;
    taskOnClick?: () => void
}

export const TaskItem: React.FunctionComponent<ITaskItem> = 
    ({task, action, taskOnClick}) => {
    const {title, description, date, category, status, priority} = task;
    const gap = 10;
    const tags = [category, status, priority];
    const zeroMargin = {margin: "0"};
    return(
       
        <Flex
            tabIndex={0}
            className={classes.card} 
            aria-label="open task for edit"
            vertical
            onClick={()=>{taskOnClick?.()}}
        >
            <Flex gap={gap} vertical className={classes.flexGrowElement}>
                <Title level={5} style = {zeroMargin} tabIndex={0}>{title}</Title>
                <Divider size="small" style = {zeroMargin}/>
                <Flex gap={gap} vertical className={classes.flexGrowElement}>
                    {
                        description
                        ?<Paragraph
                            tabIndex={0}
                            ellipsis={{ rows: 3, expandable: false }}
                            style = {zeroMargin}
                        >
                            {description}
                        </Paragraph>
                        :description
                    }
            
                    <Flex wrap gap={gap}>
                        {tags.map( tagName => {
                            const {value, color} = getTagValue(tagName);
                            return <AdaptTag key = {value} color={color} tabIndex={0}>
                                {value}
                            </AdaptTag>
                        } )}
                    </Flex>
                    
                </Flex>
                <Flex wrap gap={gap} justify="space-between" align="end">
                    {action}
                    <Text className={classes.date} tabIndex={0}>{dateToString(date)}</Text>
                    
                </Flex>
                <Text className={classes.message}>Нажмите для редактирования</Text>
            </Flex>
        </Flex>
    )
}