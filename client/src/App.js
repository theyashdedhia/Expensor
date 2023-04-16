import { useEffect, useState } from "react";
import AppBar from './components/AppBar.js';
import TransactionForm from "./components/TransactionForm.js";

const InitialForm = {
  amount: 0,
  description : '',
  date: ''
}

function App() {

  const [form, setForm] = useState(InitialForm);

  const [transactions, setTransactions] = useState([])
  
  useEffect(()=>{
    fetchTransactions()
  })

  async function fetchTransactions(){
    const res = await fetch('http://localhost:4000/transaction')
    const {data} = await res.json()
    setTransactions(data);
  }

  async function handleSubmit(e){
    e.preventDefault()
    const res = await fetch('http://localhost:4000/transaction', {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'content-type': "application/json"
      }
    });
    if(res.ok){
      setForm(InitialForm)
      fetchTransactions();
    }
  }

  function handleInput(e){
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (

    <div>
      <AppBar/>

      <TransactionForm/>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={form.amount}
          name="amount"
          onChange={handleInput} 
          placeholder="Enter transaction amount"
          />
        <input 
          type="text" 
          value={form.description}
          name="description"
          onChange={handleInput} 
          placeholder="Enter transaction details"
          />
        <input 
          type="date"
          value={form.date} 
          onChange={handleInput} 
          name="date"
          />
        <button type="submit">Submit</button>
      </form>

      <br/>

      <div>
        <table>
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key = {trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
