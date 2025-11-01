import {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import './App.css';
import {taskList} from "./components/data";

const App = () =>
{
  const[tasks, setTasks] = useState([]);
  
  useEffect(() =>
  {
    setTasks(taskList);
  }, []);

  return (
    <div>
      <h1>Task Management React App</h1>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} />} />
        <Route path="/taskdetail/:id" element={<TaskDetail tasks={tasks} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

