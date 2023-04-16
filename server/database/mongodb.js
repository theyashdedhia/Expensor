import mongoose from "mongoose";

async function connect(){
    await mongoose.connect(
        "mongodb+srv://theyashdedhia:mongopass@cluster0.qq9tdnd.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>console.log("MongoDb Connected Successfully"))
    .catch((err)=> console.log(err));
}

export default connect;