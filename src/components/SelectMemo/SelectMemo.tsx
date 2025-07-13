import { Select, type SelectProps } from "antd";
import React  from "react";

//при частоте срабатывания onchange в текстовом во время зажатой клавишы рендер селекта убивает приложение
const SelectMemo: React.FunctionComponent<SelectProps> = 
React.memo( props => {
    return(
        <Select {...props}/>
    )
})

export default SelectMemo;