

const TodoList = ({todo, setTodo, setInput, input}) => {
    const handleDelete = ({index}) =>{
        const newArr = [...todo]
        newArr.splice(index, 1)
        setTodo(newArr)
    }

    const handleDeleteAll = () => {
        setTodo([])
    }

    // const handleEdit = ({index}) =>{
    //     console.log(item.title.index);
    //     console.log("Edit");
    // }
  return (
    <div className="todo-list">
        {todo.map((item, index) => (
            <li className="todo-item" key={index}><div>{item.title}</div>  <button className="btn" onClick={handleDelete}>Delete</button></li>
        ))}

        <div className="footer">
            <p>You have <b>{todo.length}</b> pending task</p>
            <button className="btn" onClick={handleDeleteAll}>DeleteAll</button>
        </div>
    </div>
  )
}

