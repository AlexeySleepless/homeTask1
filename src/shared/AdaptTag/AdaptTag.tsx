import { Tag, type TagProps,} from "antd"
import classes from "./AdaptTag.module.css"

export const AdaptTag: React.FunctionComponent<TagProps> = 
(props)=>{
    return(
        <Tag {...props} className={`${classes.tag} ${props.className}`}></Tag>
    )

} 