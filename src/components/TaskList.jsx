import { TaskCard } from './TaskCard'
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

export function TaskList() {

    const { tasks, deleteTask } = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1 className='text-white font-bold text-3xl text-center bg-red-400 p-5 max-w-md flex justify-center mx-auto'>No hay Tareas</h1>;
    }

    return (
        <div className='grid grid-cols-4 gap-4'>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}