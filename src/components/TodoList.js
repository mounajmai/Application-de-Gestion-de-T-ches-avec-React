import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Clear the input field
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-xl shadow-xl">
      <h1 className="text-3xl font-extrabold mb-6">Liste des tâches</h1>
      <div className="flex mb-5">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Ajouter une tâche"
          className="flex-grow border-none rounded p-3 mr-3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleAddTask}
          className="bg-yellow-400 text-black font-semibold rounded px-6 py-3 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Ajouter
        </button>
      </div>
      <ul className="list-none">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
            <span className="text-lg">{task}</span>
            <button
  onClick={() => handleDeleteTask(index)}
  className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
>
  Supprimer
</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
