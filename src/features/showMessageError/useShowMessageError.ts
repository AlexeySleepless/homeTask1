import { message } from "antd";
import { isFetchError, type rtkError } from "../../entities";
import { useEffect } from "react";

export const useShowMessageError = (error: rtkError) => {
    const [messageApi, contextHolder] = message.useMessage();
    const showFetchError = () => {
        if(!isFetchError(error)){
            return;
        }
        messageApi.open({
            type: 'error',
            content: 'Ошибка соединения',
        });
    }
    useEffect(()=>{
        showFetchError();
    },[error])
    return contextHolder;
}