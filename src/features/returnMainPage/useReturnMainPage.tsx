import { useNavigate } from "react-router-dom";
export const useReturnMainPage = () => {
    const navigate = useNavigate();
    return ()=>{navigate("/")}
}