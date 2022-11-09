// const Conuter = () => {
//     const[value, setValue] = React.useState(0)
//     return (
//         <div>
//             <button onClick={() => setValue(value - 1)}>-</button>
//             <button>{value}</button>
//             <button onClick={() => setValue(value+1)}>+</button>
//         </div>
//     )
// }



function App(){
    const [input, setInput] = React.useState('')
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState([])
    React.useEffect(() => {
        const controller = new AbortController()
        fetch("https://jsonplaceholder.typicode.com/todos",{signal: controller.signal})
        .then((res) => res.json())
        .then((data) => {
            setTodos(data)
        })

        return () => {
            controller.abort()
        }
    }, [])

    return(
        <div className="todo-app">
            <h1>Todo App</h1>
            <Todo input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo} input={input} setInput={setInput}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

//Chia sẻ trang thai giữa các Component
// - Nâng trạng thái Component
// - Sử dụng contact
// - Sử dụng các thư viện Redux,...

//Two way data Binding
//Lifecycle
// - Mounting
// - Updating
// - Unmounting
// Các phương thức vòng đời khi component đạt đến giai đoạn cụ thể
// + Render()
// + ComponentDickmount()

//UseEffect
// - Hook xử lí lifecycle