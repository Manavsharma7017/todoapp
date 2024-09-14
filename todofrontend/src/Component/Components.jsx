import { useState } from 'react'
import { componenttodo } from "../store/atoms";
import { useRecoilState } from 'recoil';
export function Component(){
    const [tittle,settittle]=useRecoilState(componenttodo)
    const [de,setde]=useState("");
    return(
        <div>
            <input style={{
                margin:2,
                padding:2,
            }} type="text" placeholder="tittle" onChange={(e)=>{
                settittle(e.target.value)
            }}/>
            <br />
            <br />
            <input  style={{
                margin:2,
                padding:2,
            }}type="text" placeholder="description"onChange={(e)=>{
                setde(e.target.value)
            }}/>
            <br />
            <br />  
            <button  style={{
                margin:2,
                padding:2,
            } } onClick={()=>{
                    fetch("http://localhost:3000/todo",{
                        method:"POST",
                        body:JSON.stringify({
                            tittle:tittle,
                            dexcription:de,
                            completed:false
                        }),
                        headers:{
                            "Content-type":"application/json"
                        }
                        }
                    ).then(async function(res){
                        const json =await res.json();
                        alert("todo added")
                    })
                }
            }>Add todo</button>
        </div>
    )
}