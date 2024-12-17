import { createContext, useState, useEffect } from "react"
import { tasks as data } from '../tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    // That is used for receive tasks of form.
    const createTask = (task) => {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }]);
    }

    // Used for delete a task.
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider value={
            {
                tasks,
                createTask,
                deleteTask
            }
        }>
            {props.children}
        </TaskContext.Provider>
    )
}