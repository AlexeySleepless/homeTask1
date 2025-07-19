import { getCategoryOptions, getPriorityOptions, getStatusOptions } from "../../tag/libs/tagUtils";
import type { limitSelect } from "./types";

const categorySelect: limitSelect= {
    label: "Категория",
    name: "category",
    options: getCategoryOptions()
}
const statusSelect: limitSelect = {
    label: "Статус",
    name: "status",
    options: getStatusOptions()
}
const prioritySelect: limitSelect = {
    label: "Приоритет",
    name: "priority",
    options: getPriorityOptions()
}
export const dataSelects = [categorySelect, statusSelect, prioritySelect];