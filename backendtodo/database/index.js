const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect('');//your mongodb url
const todoschema = new mongoose.Schema({
    tittle:String,
    dexcription:String,
    completed:Boolean
})
const todomb=mongoose.model("todomb",todoschema);
module.exports={
    todomb
}