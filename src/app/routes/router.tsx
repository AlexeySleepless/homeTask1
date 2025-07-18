import { createBrowserRouter } from 'react-router-dom';
import { CreateTaskPage, ErrorPage, TaskDetailsPage, TasksPage } from '../../pages';
import { taskRouting } from '../../entities';

const {taskPath, taskIdName, createTaskPath} = taskRouting;
export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <TasksPage/>
            },
            {
                path: `${taskPath}/:${taskIdName}`,
                element: <TaskDetailsPage/>,
            },
            {
                path: `${taskPath}/${createTaskPath}`,
                element: <CreateTaskPage/>,
            },

        ]
    }
])