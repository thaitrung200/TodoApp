
const Todo = ({input, setInput, todo, setTodo})=>{
    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const handleBtnAdd = () =>{
        input = input.trim()
        if(input){
            setTodo([...todo, {title: input, completed: false}])
            setInput('')
        }
        else{
            console.log("chưa nhập tt");
        }
    }
  return (
    <div className="todo">
        <input type="text" className="todo-input" placeholder="Add todo"  value={input}
          onChange={handleInput}/>
        <button className="btn-add" onClick={handleBtnAdd}>Add</button>
    </div>
  )
}

Todo.protoTypes = {}
