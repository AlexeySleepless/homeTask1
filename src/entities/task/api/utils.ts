import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const isFetchError = (error: unknown): error is FetchBaseQueryError => {
    if(!(error&&typeof error === "object")){
        return false;
    }
    if(!("status" in error)){
        return false;
    }
    if(error.status!=='FETCH_ERROR'){
        return false;
    }
    return true;
}