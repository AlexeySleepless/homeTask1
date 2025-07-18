import { Select, Form } from "antd";
import type { JSX } from "react";
import classes from "./SelectTitle.module.css";


export interface SelectTitleProps {
    name: string;
    label: string;
    options: {value: string; label: JSX.Element;}[];
}


export const SelectTitle: React.FunctionComponent<SelectTitleProps> = (
    {
        name, label, ...selectProps
    }
)=>{
    return(
        <Form.Item
                name = {name}
                label={label}
            >
            <Select {...selectProps} className={classes.select}/>
        </Form.Item>
    )

} 