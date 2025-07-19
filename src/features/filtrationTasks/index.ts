import type { IFilterTag, ITask } from "../../entities";

export const filtrationTasks = (tasks: ITask[], filterTags: IFilterTag[]): ITask[] => {
    console.log("filter")
    if(!(tasks.length&&filterTags.length)){
        return tasks;
    }

    // надо сгруппировать теги для дальнейшей филmтрации,
    // так как параметры задачи должны включать хотя бы один тег 
    // из каждой группы тегов

    const tagGroupsMap = new Map<keyof ITask, IFilterTag[]>();
    filterTags.forEach((filterTag)=>{
        const name = filterTag.filterName;
        if(!tagGroupsMap.get(name)){
            tagGroupsMap.set(name, [filterTag]);
            return;
        }
        const groupFilterTags = tagGroupsMap.get(name)
        if(Array.isArray(groupFilterTags)){
            groupFilterTags.push(filterTag)
        }
    })


    return tasks.filter( task =>{
        const groups = tagGroupsMap.values();
        for(const group of groups){
            let groupResult = false;
            for(const filterTag of group){
                const {tag, filterName} = filterTag;
                groupResult = groupResult || task[filterName] === tag;
            }
            if(!groupResult){
                return false;
            }
        }
        return true;
    })
}