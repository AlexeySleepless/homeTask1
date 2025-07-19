import React  from "react";
import classes from "./Filters.module.css";
import { getTagValue, useAppDispatch, type IFilterTag, type tagType } from "../../entities";
import { Button, Flex, Select, Typography } from "antd";
import { dataSelects, filterTagsSlice, type ITask } from "../../entities";
import { AdaptTag } from "../../shared";
import { CloseOutlined } from "@ant-design/icons";

const {Text} = Typography

//Декомпозировать этот виджет на сущности не получилось

interface filterProps {
    filterTags: IFilterTag[];
}

export const Filters: React.FunctionComponent<filterProps> = 
({filterTags}) => {
    const {addFilterTag, removeFilterTagByTagName, removeAllFilterTags} = filterTagsSlice.actions;
    const dispatch = useAppDispatch();

    const getNewTag = (tag: tagType, filterName: keyof ITask) => {
        dispatch(addFilterTag({tag, filterName}) );
    }

    const tagClose = (deleteTag: tagType) => {
        dispatch(removeFilterTagByTagName(deleteTag))
        
    }

    const clearFilterTags = () => {
        dispatch(removeAllFilterTags())
    }
    
    return(
        <Flex vertical className={classes.filtersWrapper} gap={10}>
            <div className={classes.tagsManageWrapper}>
            <div className={classes.tagsWrapper}>
                {!filterTags.length&&
                    <Text className={classes.placeholder}>
                        Выберите теги для фильтрации
                    </Text>}
                {filterTags.map( filterTag => {
                    const tagName = filterTag.tag
                    const {value, color} = getTagValue(tagName);
                    return <AdaptTag 
                                key = {tagName}
                                color={color}
                                tabIndex={0}
                                className={classes.tag}
                                closable
                                onClose = {e=>{tagClose(tagName)}}
                                onClick = {e=>{tagClose(tagName)}}
                            >
                                {value}
                            </AdaptTag>
                })}
            </div>
            <Button 
                aria-label="очистить теги фильтров"
                icon={<CloseOutlined/>}
                className={classes.deleteButton}
                onClick={clearFilterTags}
            />
            </div>
            <div className={classes.grid}>
                {dataSelects.map(data=>(
                    <Flex key={data.label} vertical gap={5}>
                        <Text 
                            tabIndex={0}
                            className={classes.filterTitle}
                        >
                            {data.label}
                        </Text>
                        <Select {...data} 
                            className={classes.select}
                            onSelect={(value: tagType) => getNewTag(value, data.name)}
                        />
                    </Flex>
                ))}
            </div>
        </Flex>
    )
}