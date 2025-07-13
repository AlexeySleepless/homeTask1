import { categoryValues, priorityValues, statusValues, type categoryValuesType, type Mutable, type priorityValuesType, type statusValuesType } from "./const"

const parityCategory: Mutable<categoryValuesType, tagDataModel> = {
    BUG: TagDataModel("red", "Bug"),
    FEATURE: TagDataModel("purple", "Feature"),
    DOCUMENTATION:TagDataModel("blue", "Documentation"),
    REFACTOR: TagDataModel("cyan", "Refactor"),
    TEST: TagDataModel("gray", "Test"),   
}

const parityStatus: Mutable<statusValuesType, tagDataModel> = {
    TODO: TagDataModel("red", "To Do"),
    INPROGRESS: TagDataModel("gold", "In Progress"),
    DONE: TagDataModel("green", "Done"),
}

const parityPriority: Mutable<priorityValuesType, tagDataModel> = {
    LOW: TagDataModel("lime", "Low"),
    MEDIUM: TagDataModel("orange", "Medium"),
    HIGH: TagDataModel("red", "High"),
}

export interface tagDataModel {
    color: string
    value: string
}

const defaultObj: tagDataModel = {
    color: "#ffffff",
    value: ""
}

function TagDataModel(color: string, value: string):tagDataModel{
    return {
        color,
        value,
    }
}
export function isTagDataModel(value: any): value is tagDataModel {
    return "color" in value && "value" in value;
}

export function isObjKey<T extends {}>(key: PropertyKey, obj: T ): key is keyof T {
    return key in obj
}

function getTagValue<T>(storage: T,value: keyof T): tagDataModel{
    if(!isTagDataModel(storage[value])){
        return {...defaultObj}
    } 
    return storage[value];
}



export const getCategoryTagValue = (value: keyof typeof categoryValues) => {
    return getTagValue(parityCategory, value);
}

export const getStatusTagValue = (value: keyof typeof statusValues) => {
    return getTagValue(parityStatus, value);
}

export const getPriorityTagValue = (value: keyof typeof priorityValues) => {
    return getTagValue(parityPriority, value);
}

