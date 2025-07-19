import type { SelectTitleProps } from "../../../shared";
import type { ITask } from "../../task";

export interface limitSelect extends SelectTitleProps{
    name: keyof ITask;
}