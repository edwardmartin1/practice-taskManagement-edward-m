import {useParams} from "react-router";

const TaskDetail = ({tasks}) =>
{
    const {id} = useParams();
    const task = tasks.find(task => String(task.id) === id);

    if (!task) 
    {
        return (<div> <h2>Task not found.</h2></div>);
    }

    return (
        <div className="detail">
            <h2>Task Detail</h2>
            <h3>Title: {task.title}</h3>
            <h3>Description: {task.description}</h3>
        </div>
    );        
};

export default TaskDetail;

