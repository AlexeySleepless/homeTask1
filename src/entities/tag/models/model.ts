import { TagDataModel } from "../libs/tagUtils"
import { type categoryValuesType, type Mutable, type priorityValuesType, type statusValuesType, type tagDataModel } from "./types"


export const parityTag: 
    Mutable<categoryValuesType, tagDataModel>
    &Mutable<statusValuesType, tagDataModel>
    &Mutable<priorityValuesType, tagDataModel> = {
        BUG: TagDataModel("red", "Bug"),
        FEATURE: TagDataModel("purple", "Feature"),
        DOCUMENTATION:TagDataModel("blue", "Documentation"),
        REFACTOR: TagDataModel("cyan", "Refactor"),
        TEST: TagDataModel("green", "Test"),
        TODO: TagDataModel("red", "To Do"),
        INPROGRESS: TagDataModel("gold", "In Progress"),
        DONE: TagDataModel("green", "Done"),
        LOW: TagDataModel("green", "Low"),
        MEDIUM: TagDataModel("gold", "Medium"),
        HIGH: TagDataModel("red", "High"),
    }


