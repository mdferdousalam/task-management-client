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
                window.location.reload();

            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (

        <div className=" mx-auto">
            <table className="table-auto w-full">
                <thead >
                    <tr className="mx-auto">
                        <th>SL</th>
                        <th>Task Name</th>
                        {/* <th>Image</th> */}
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (

                        <tr className="text-center" key={task._id}>
                            {console.log(task)}
                            <td>{index + 1}</td>
                            <td>{task.task}</td>
                            {/* <td><img src={task.image} alt="" /></td> */}
                            <td><button className="border-2 border-red-700 rounded px-3 " onClick={() => handleUpdate(task._id)}>Update</button></td>
                            <td><button className="border-2 border-red-700 rounded px-3 " onClick={() => handleDelete(task._id)}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>

    );
};

export default MyTask;
