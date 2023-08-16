import { useState } from 'react'
import './practice.css'


export  default function Practice(){
    const [tasks,settasks]=useState(
        [
            {
                id:1,
             name:"abc",
             status:true   
            }, {
                id:2,
             name:"abcsad",
             status:false  
            },
             {
                id:3,
             name:"absdadc",
             status:true   
            }, {
                id:4,
             name:"asdaasdbc",
             status:false  
            }
        ]
    );
    function removetask(id){
        settasks(tasks.filter(task => id!==task.id))
    }

    return(
        <section className="container practice-section">
            <div className="card">
            <div className="card-head">
                Practice
                </div>
                <div className="card-body">
                    <div>
                        {
                            tasks.map((task)=>
                                <div className={task.status ? 'completed  table-row' : 'incompleted  table-row'} >
                                    <div className="d-flex justify-content-between w-40
                                ">
                                        <div>
                                            {task.id}
                                        </div>
                                        <div>
                                            {task.name}
                                        </div>   
                                    </div>

                                    <div>
                                        <button class="btn btn-danger" onClick={()=>removetask(task.id)}>Delete</button>
                                    </div>
                                </div>  
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}