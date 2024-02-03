import { useState, memo } from "react";

let counter = 4;

export function Keys() {
    const [todo, setTodos] = useState([{
        id: 1,
        title: "Go to gym",
        description: "Go to gym"
    },
    {
        id: 2,
        title: "Go to class",
        description: "Go to class"
    },
    {
        id: 3,
        title: "Go to park",
        description: "Go to park"
    }])

    function addTodo(){
        setTodos([...todo, {
            id: counter++,
            title: Math.random(),
            description: Math.random()
        }])
    }

    return (
        <div>
            <button onClick={addTodo}>Click Here the add Todo</button>
            {todo.map(todos => <Todo key={todos.id} title={todos.title} description={todos.description}/>)}
        </div>
    )
}

const Todo = memo(function Todo({title, description}){
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
})