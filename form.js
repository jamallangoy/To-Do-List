function TodoForm({addTodo}){

    const [value, setValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return(
<>
        <div className="head ">To-Do List</div>

        <div className="container">
            
        
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        value={value}
                        placeholder="Add Todo..."
                        onChange={(e) => setValue(e.target.value)}
                    ></input>
                    <button className="btn btn-outline-info btn-sm">Add +</button>
                </form> 
        </div>

        </>
    );
}

