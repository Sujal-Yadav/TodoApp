export function Todos({ todos }) {
    return (
    <div>
        {todos.map(function (todo) {
                return (
                    <div>
                        <h1> {todo.title} </h1>
                        <h2> {todo.description} </h2>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> {todo.completed == true ? 'Completed' : 'Mark as Complete'} </button>
                    </div>
                )
            })}
    </div>
    )
}