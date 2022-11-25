import { useState,useRef } from 'react'

function App() {
  const 
    [items, setItems] = useState([]),
    inputRef = useRef(),
    addItem = (e) => {
      e.preventDefault();
      let value = inputRef.current.value;
      if(value === "") return
      setItems(prev => {
        return [...prev,value]
      });
      inputRef.current.value = ""
    };


  return (
    <div className="App">
      Search
      <input type={"search"}/>
      <br/>
      <br/>
      <form onSubmit={addItem}>
        New Item: <input ref={inputRef} type={"text"}/>
        <button type='submit'>Add</button>
      </form>
      <br/>
      <h3>Items:</h3>
      {items.map((item,index) => {
        <div>{item}-{index} </div>
      })}
    </div>
  )
}

export default App
