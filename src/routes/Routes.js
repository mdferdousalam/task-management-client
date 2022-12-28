import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask";
import CompletedTask from "../components/CompletedTask";
import ErrorElement from "../components/ErrorElement";
import MyTask from "../components/MyTask";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            },
            {
                path: '/addtask',
                element: <AddTask />
            },
            {
                path: '/mytask',
                element: <MyTask />
            },
            {
                path: '/completedtask',
                element: <CompletedTask />
            }
        ]

    }
])

export default router;