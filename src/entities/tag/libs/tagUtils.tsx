
import { parityTag } from "../models/model";
import { categoryValues, priorityValues, statusValues, type tagType, type tagDataModel } from "../models/types";




export function TagDataModel(color: string, value: string):tagDataModel{
    return {
        color,
        value,
    }
}

function isTagDataModel(value: unknown): value is tagDataModel {
    if(!(value && typeof value === "object")){
        return false;
    }
    return "color" in value && "value" in value;
}

/// для возврата цвета и надписи тега
function getTagValueFromStorage<T>(storage: T,value: keyof T): tagDataModel{
    if(!isTagDataModel(storage[value])){
        return TagDataModel("white", "")
    } 
    return storage[value];
}

// для формирования данных необходимых для Select
function getOptions<T extends {}>(typeValues: T, getFunction: (value: keyof T) => tagDataModel){
    const keyArray = Object.keys(typeValues);
    return keyArray.map(key=>({
        value: key,
        label: <span>{getFunction(key as keyof T).value}</span>,
    }));
}
export const getTagValue = (value: tagType) => getTagValueFromStorage(parityTag, value)

export const getCategoryOptions = () => getOptions(categoryValues, getTagValue)
export const getStatusOptions = () => getOptions(statusValues, getTagValue)
export const getPriorityOptions = () => getOptions(priorityValues, getTagValue)

