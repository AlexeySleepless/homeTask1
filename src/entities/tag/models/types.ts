export const categoryValues = {
    BUG: "BUG",
    FEATURE: "FEATURE",
    DOCUMENTATION:"DOCUMENTATION",
    REFACTOR: "REFACTOR",
    TEST: "TEST",
} as const


export const statusValues = {
    TODO: "TODO",
    INPROGRESS: "INPROGRESS",
    DONE: "DONE",
} as const


export const priorityValues = {
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    HIGH: "HIGH",
} as const


export type categoryValuesType = typeof categoryValues;
export type statusValuesType = typeof statusValues;
export type priorityValuesType = typeof priorityValues;

export type categoryType = keyof categoryValuesType;
export type statusType = keyof statusValuesType;
export type priorityType = keyof priorityValuesType;

export type Mutable<T, valueType> = {
    -readonly [P in keyof T]: valueType
}

export interface tagDataModel {
    color: string
    value: string
}
