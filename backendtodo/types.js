const z=require("zod");
const todo=z.object({
    tittle:z.string(),
    dexcription:z.string(),
    completed:z.boolean()
})

const toseetodo=z.object({
    id:z.string()
})

module.exports={
    todo,
    toseetodo
};
