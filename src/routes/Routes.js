import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask";
import ErrorElement from "../components/ErrorElement";
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

            }
        ]

    }
])

export default router;