import expess from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = expess();
const PORT = 8000;

app.use(cors);

await mongoose.connect(
    "mongodb+srv://theyashdedhia:mongopass@cluster0.qq9tdnd.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>console.log("MongoDb Connected Successfully"))
.catch((err)=> console.log(err));

app.get('/', (req, res)=>{
    res.send("Hello World")
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})