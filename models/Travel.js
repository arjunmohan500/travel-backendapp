const mongoose=require("mongoose")
const schema=mongoose.Schema(

    {
        "name":String,
        "destination":String,
        "date":String,
        "package":String,
        "phoneno":String
    }
)
let travelmodel=mongoose.model("travels",schema);
module.exports={travelmodel}