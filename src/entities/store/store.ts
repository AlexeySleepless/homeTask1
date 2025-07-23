import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "../task";
import { filterTagsReducer } from "../filterTags";

const rootReducer = combineReducers({
    filterTagsReducer,
    [tasksApi.reducerPath]: tasksApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDafaultMiddleware) => 
                         getDafaultMiddleware().concat(tasksApi.middleware)
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];