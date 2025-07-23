import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ITask } from "../model";

const tasksTagType = "Tasks";
const apiTagTypes = [tasksTagType];
const queryFetchAllTasks = {
    query: () => ({
        url: '/tasks'
    }),
    providesTags: () => [tasksTagType]
}

const queryFetchTask = {
    query: (id: number) => ({
        url: `/tasks/${id}`,
    }),
    providesTags: () => [tasksTagType]
}

const queryCreateTask = {
    query: (task: ITask) => ({
        url: '/tasks',
        method: "POST",
        body: task,
    }),
    invalidatesTags: [tasksTagType]
}

const queryUpdateTask = {
    query: (task: ITask) => ({
        url: `/tasks/${task.id}`,
        method: "PATCH",
        body: task,
    }),
    invalidatesTags: [tasksTagType]
}

const queryDeleteTask = {
    query: (task: ITask) => ({
        url: `/tasks/${task.id}`,
        method: "DELETE",
        body: task,
    }),
    invalidatesTags: [tasksTagType]
}

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    tagTypes: apiTagTypes,
    baseQuery: fetchBaseQuery({baseUrl: "https://home-task3-server-si2i.vercel.app/"}),
    endpoints: (build) => ({
        fetchAllTasks: build.query<ITask[], any>(queryFetchAllTasks),
        fetchTask: build.query<ITask, number>(queryFetchTask),
        createTask: build.mutation<any, ITask>(queryCreateTask),
        updateTask: build.mutation<any, ITask>(queryUpdateTask),
        deleteTask: build.mutation<any, ITask>(queryDeleteTask),
    })
});