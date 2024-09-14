const express=require("express");
const app=express();
const {todo,toseetodo}=require("./types")
app.use(express.json());
const {todomb}=require("../backendtodo/database/index")
const cors=require("cors")
// app.use((err,req,res,next)=>{
//     res.json({
//       msg:"something went wrong"
//     })
//   });
app.use(cors(
))
app.post("/todo",async(req,res)=>{
 const createtodo=req.body;
 const parsetodo=todo;
 const parse=parsetodo.safeParse(createtodo);
 if(!parse.success){
    res.status(411).json({
        msg:"invaled syntex"
    })
    return;
 }
 else{
  const creted=await todomb.create({
        tittle:createtodo.tittle,
        dexcription:createtodo.dexcription,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
 }
})

app.get("/seetodo",async(req,res)=>{ 
  
    const response =await todomb.find({

    })
    res.json({
        response
    })
    
});

app.put("/todocomplete",async(req,res)=>{
    const ctodo=req.body;

    const parse=await toseetodo.safeParse(ctodo);
    if(!parse.success){
       res.status(411).json({
           msg:"invaled syntex"
       })
       return;
    }
    else{
     await todomb.updateOne({
     _id:req.body.id
     },{
        $set:{
            completed:true
        }
     })
    }
    res.send("done");
    // const id=res.body.id;
    // const response=odomb.findById(id);
    // console.log(response);

})
app.listen(3000);