import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h2 className="text-xl font-bold capitalize">{task.title}</h2>
            <p className="text-gray-300 text-sm">{task.description}</p>
            <button className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Delete Task</button>
        </div>
    );
}