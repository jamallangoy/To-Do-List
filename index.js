const App = () =>{

    const [todos, setTodos] = React.useState([
        {
            text: 'Learn React Concepts',
            isCompleted: false
        },
        {
            text: 'Learn To-Do Lists',
            isCompleted: false
        },
        {
            text: 'Learn Formik Forms',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }
    
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

return(

<>

    <div className="container app">
            
            <TodoForm addTodo={addTodo} />   
            {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo} className="todo" />)}
              
    </div>
    
</>

)
};

ReactDOM.render(<App />, document.getElementById('root'));


//-------------------------
