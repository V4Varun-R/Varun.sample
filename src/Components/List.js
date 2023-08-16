import { useState } from 'react'
import './List.css'
import TaskList from './TaksList';
export default function ToDoList(){
    const [items,setitems] = useState([
        {id:1 , title:"Do work 1",completed:true},
        {id:2 , title:"Do work 2",completed:true},
        {id:3 , title:"Do work 3",completed:false},
        {id:4 , title:"Do work 4",completed:false}
    ]);
    function removeitem(id){
        setitems(items.filter(item => id !== item.id))
    }
    const [taskName,settaskName]=useState();
    const [progress,setprogress]=useState(false);

    function setName(e){
        settaskName(e.target.value);
    }
    function clearfield(){
        settaskName("");
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        const items = {
            id:Math.floor(Math.random() * 1000),
            title:taskName,
            completed:progress
        }
        console.log(items);
    }
    const [view,setview]=useState(true);
    return(
        <>
            <div class="container">
                <div className="card">
                    <div className="card-body">
                        <div >
                            <form onSubmit={handleSubmit} className='row'>
                                <div className='col-md-5' >
                                    <input type="text" class="form-control" placeholder="Task Name" onChange={setName} value={taskName}></input>
                                </div>
                                <div className='col-md-4'>
                                    <select  class="form-control" onChange={(e)=>setprogress(e.target.value)} value={progress}>
                                        <option value={true}>Completed</option>
                                        <option value={false}>Incomplete</option>
                                    </select>
                                </div>
                                <div className='col-md-3 d-flex justify-content-evenly'>
                                    <button className='btn btn-danger' onClick={clearfield}>Reset</button>
                                    <button className='btn btn-info' type='submit'>Submit</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <button onClick={() => setview(!view)} className='btn btn-info'>Show List</button>
                        <ul>
                        {view && items.map((item)=>(
                           <TaskList task={item} removeitem={removeitem}/>
                        ))}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}