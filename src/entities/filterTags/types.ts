import type { tagType } from "../tag";
import type { ITask } from "../task";

export interface IFilterTag {
    tag: tagType;
    filterName: keyof ITask
}