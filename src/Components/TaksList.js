export default function TaskList({task,removeitem}){
    return(
        <>
         <li key={task.id} className={task.completed ? "done custom-list" : "undone custom-list"}>
            <div>{task.id}</div>
            <div>{task.title}</div>
            <button className="btn btn-danger" onClick={()=>removeitem(task.id)}>Delete</button>
        </li>
        </>
    );

}