import { useEffect, useInsertionEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Render } from '../src/components/Render'
import { Wrapper } from '../src/components/Wrapper'
import { Todos } from '../src/components/Todos'

function App() {
  return (
    <div>
      <Router>
        <CreateTodo />
        <Routes>
          <Route path="/wrapper" element={<Wrapper />} />
          <Route path="/render" element={<Render />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
    </div>
  )
}


// function App() {
//   const [todos, setTodos] = useState([]);
//   //   const [counter, setCounter] = useState(0);

//   //   useEffect(() => {
//   //     alert(counter);
//   // }, [counter])

//   //   return (
//   //     <div>
//   //       <button onChange={() => setCounter(counter++)}>Counter</button>
//   //     </div>
//   //   )
//   // useEffect(() => {
//   //   fetch('http://localhost:3000/todos')
//   //     .then(async function (res) {
//   //       const json = await res.json();
//   //       setTodos(json.todos);
//   //       // alert("Fetched Data Successfully");
//   //     })
//   // }, [])

//   useEffect(() => {

//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(response) {
//       setTodos(response.data.todos);
//     })
//   }, [])

//   return (
//     <div>
//       {/* <CreateTodo /> */}
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({ title, description }) {
//   return (
//     <div className='container text-center pt-10'>
//       <div className='font-bold'>{title}</div>
//       <div className='font-semibold'>{description}</div>
//     </div>
//   )
// }

// function App(){
//   return (
//     <div>
//       <Todo id={5} />
//     </div>
//   )
// }

// function Todo({id}){
//   const [todo, setTodo] = useState([]);

//   useEffect(() => {
//     fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then(async function(res) {
//       const json = await res.json();
//       setTodo(json.todo);
//     })
//   }, []);

//   return (
//     <div>
//       <div className='text-xl'>
//         {todo.title}
//       </div>

//       <div className='text-md'>
//         {todo.description}
//       </div>
//     </div>
//   )
// }

export default App
