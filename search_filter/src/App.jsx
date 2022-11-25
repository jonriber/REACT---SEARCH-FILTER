import { useState,useRef } from 'react'

function App() {
  const 
    [items, setItems] = useState([]),
    test = "teste const",
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
    <>
      Search
      <input type={"search"}/>
      <br/>
      <br/>
      <form onSubmit={addItem}>
        New Item: <input ref={inputRef} type={"text"}/>
        <button type='submit'>Add</button>
      </form>
      <br/>
      <br/>
      <div>
        <h3>Items:</h3>
        <ul>
          {items.map((item,index) => 
              <li key={index}>{item}</li>
          )}
        
        </ul>
      </div>
    </>
  )
};

export default App;
