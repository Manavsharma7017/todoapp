const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect('mongodb+srv://manav:Manav%400603@cluster0.svddq7z.mongodb.net/todo');
const todoschema = new mongoose.Schema({
    tittle:String,
    dexcription:String,
    completed:Boolean
})
const todomb=mongoose.model("todomb",todoschema);
module.exports={
    todomb
}