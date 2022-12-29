import React, { useState, useEffect } from "react";
import axios from "axios";
import UseTitle from "../hooks/UseTitle";

const CompletedTask = () => {
    UseTitle('Completed Task')
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Send a GET request to the server to retrieve the completed tasks
        axios
            .get("http://localhost:5000/api/completed-tasks")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDelete = (taskId) => {
        // Send a DELETE request to the server to delete the task
        axios
            .delete(`http://localhost:5000/api/completed-tasks/${taskId}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleNotCompleted = (taskId) => {
        // Send a PUT request to the server to mark the task as not completed
        axios
            .put(`http://localhost:5000/api/completed-tasks/${taskId}`)
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
                    <button onClick={() => handleNotCompleted(task._id)}>Not Completed</button>
                    <button onClick={() => handleDelete(task._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default CompletedTask;
