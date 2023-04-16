import expess from 'express';
import connect from './database/mongodb.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import TransactionRoutes from './routes/transactions.js'

const app = expess();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/transaction', TransactionRoutes)

await connect();

app.get('/', (req, res)=>{
    res.send("Hello World")
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})