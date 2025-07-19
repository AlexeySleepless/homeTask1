import { Button } from "antd"
import classes from "./ForwardCreateTaskPage.module.css"
import { useNavigate } from "react-router-dom"
import { taskRouting } from "../../entities"
import { PlusCircleOutlined } from "@ant-design/icons"


export const ForwardCreateTaskPage: React.FunctionComponent = () => {
    const {taskPath, createTaskPath} = taskRouting;
    const navigate = useNavigate();
    const createPageOpen = ()=>{
        navigate(`/${taskPath}/${createTaskPath}`);
    }
    return(
        <Button className={classes.button} onClick={createPageOpen}><PlusCircleOutlined/>Новая задача</Button>
    )
}