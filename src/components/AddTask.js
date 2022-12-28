import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import UseTitle from "../hooks/UseTitle";

const AddTask = () => {
    UseTitle('Add Task')
    const [task, setTask] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a FormData object to send the task and image to the server
        const formData = new FormData();
        formData.append("task", task);
        formData.append("image", image);

        // Send a POST request to the server to save the task and image
        axios
            .post("http://localhost:5000/api/tasks", formData)
            .then((response) => {
                console.log(response.data);
                toast.success('Successfully added the task')
            })
            .catch((error) => {
                console.error(error);
                toast.error('Task dont added')
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-center mx-auto flex flex-col justify-center items-center w-1/2 bg-sky-200">
                <label className="font-bold pt-4" htmlFor="task">Task:</label>
                <input
                    className="border-2 border-red-700 p-6 my-6 w-full"
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    placeholder="Enter your task name"
                    onChange={(event) => setTask(event.target.value)}
                />
                <br />
                <label className="font-bold" htmlFor="image">Image:</label>
                <input
                    className="flex items-center"
                    type="file"
                    name="image"
                    id="image"
                    title="select task image if needed"
                    onChange={(event) => setImage(event.target.files[0])}
                />
                <br />
                <button className="border-2 w-2/12 text-center flex justify-center  items-center rounded px-3 my-6 border-red-700" type="submit">Add Task</button>
                <Toaster />
            </div>
        </form>
    );
};

export default AddTask;
