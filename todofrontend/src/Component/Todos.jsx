import { useEffect, useState } from 'react'
import axios from "axios"
export function Todos(){
 const [Todo, setTodo] = useState([0])
 const [Count ,setcount]=useState(0);
useEffect(()=>{
    axios.get("http://localhost:3000/seetodo").then((res)=>{
        setTodo(res.data.response)
    })
},[Count])
    return(

        <div>
            <div>
                <button onClick={()=>{
                    
                    setcount(Count+1)
                }}>seetodo</button>
            </div>
           {
            Todo.map((todos)=>{
             return(
                <div>  
                    <h1>{todos.tittle}</h1>
                    <h2>{todos.dexcription}</h2>
                    <button>{todos.completed==true?"completed":"mark as completed"}</button>
               </div>
             )
            })
           }
        </div>
    )
}


