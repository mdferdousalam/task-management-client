import React, { useState, useEffect } from "react";
import axios from "axios";
import UseTitle from "../hooks/UseTitle";

const MyTask = () => {
    UseTitle('My Task')
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Send a GET request to the server to retrieve the tasks
        axios
            .get("http://localhost:5000/api/tasks")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleUpdate = (taskId) => {
        // Send a PUT request to the server to update the task
        axios
            .put(`http://localhost:5000/api/tasks/${taskId}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDelete = (taskId) => {
        // Send a DELETE request to the server to delete the task
        axios
            .delete(`http://localhost:5000/api/tasks/${taskId}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task._id}>
                    {task.task}
                    <button className="border-2 border-red-700 rounded px-3 mx-4 my-4" onClick={() => handleUpdate(task._id)}>Update</button>
                    <button className="border-2 border-red-700 rounded px-3 mx-4 my-4" onClick={() => handleDelete(task._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default MyTask;
