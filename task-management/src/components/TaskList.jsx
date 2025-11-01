import {Link} from "react-router";

const TaskList = ({tasks}) =>
{
    return (
        <div className="list">
            <h2>Task List</h2>

            {tasks.length === 0
                ? (<p>No tasks available.</p>)
                : (
                    <ul>
                        {tasks.map(task => 
                        (
                            <li key={task.id}>
                                <Link to={`/taskdetail/${task.id}`}>{task.title}</Link>               
                            </li>
                        ))}
                    </ul>
                  )  
            }
        </div>
    );
};

export default TaskList;

