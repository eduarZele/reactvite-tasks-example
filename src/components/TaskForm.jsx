import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function TaskForm() {

    const { createTask } = useContext(TaskContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle('');
        setDescription('');
    }

    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
            <h1 className="text-white font-bold mb-5 text-2xl">Create Your Task!</h1>
            <input 
            onChange={e => setTitle(e.target.value)} 
            placeholder="Enter your task" 
            value={title}
            className="bg-slate-900 rounded-md p-3 w-full mb-2 text-white" />
            <textarea 
            onChange={e => setDescription(e.target.value)} 
            placeholder="Ingresa una descripción" 
            value={description}
            className="bg-slate-900 rounded-md p-3 w-full mb-2 text-white"></textarea>
            <button className="bg-indigo-600 p-1.5 font-bold rounded-md text-white hover:bg-indigo-500"> Save Task</button>
            </form>
        </div>
    );
};