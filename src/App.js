import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './component/TodoList/TodoList';

function App() {


  const [list, setList] = useState([]);


  useEffect(() => {
    fetch('data.json')
      .then(res => res.json()).then(data => setList(data));

  }, [])



  const addItem = () => {

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;

    setList([...list, { name: `${name}`, price: `${price}` }])

  }


  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(list));
  }, [list])





  return (
    <div className="App">

      <input id='name' className='input2' type="text" placeholder='name' /> <br />
      <input id='price' className='input' type="text" placeholder='Price' /> <br />
      <button onClick={() => addItem()} className='button' >Adder</button>


      <div className='todo-list-div'>
        <h1>Todo List</h1>

        {list.map((item, index) => <TodoList key={index} item={item}></TodoList>)}

      </div>

    </div>
  );
}

export default App;
