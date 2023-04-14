import { useState } from "react";


function App() {

  const [form, setForm] = useState({
    amount: 0,
    description : '',
    date: ''
  })

  async function handleSubmit(e){
    e.preventDefault()
    const res = await fetch('http://localhost:8000/transaction', {
      method: "POST",
      body: form,
    });
    console.log(res)
  }

  function handleInput(e){
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    
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
  );
}

export default App;
