import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { TodoComment } from "typescript";

interface Todo {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
}

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";

    const [todo, setTodo] = useState<Todo>({
      id:1, 
      title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-09-09",
      completed: false,
    });
    const [todos, setTodos] = useState<Todo[]>([]);
    
    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };
  
    // const removeTodo = async (todo: Todo) => {
    //   try {
    //     const response = await axios.delete(`${API}/${todo.id}`);
    
    //     // Assuming your DELETE endpoint returns the updated list:
    //     setTodos(response.data);  
    
    //   } catch (error) {
    //     console.error("Error deleting todo:", error);
    //     // Consider displaying an error message to the user here
    //   }
    // };

    const fetchTodoById = async (id: any) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };

    const updateTitle = useCallback(async () => {
      const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data); 
  }, [todo.id, API]);

  const deleteTodo = async (todo:Todo) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const fetchTodos = useCallback(async () => {
    try {
        const response = await axios.get(API);
        setTodos(response.data);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}, []);

const createTodo = useCallback(async () => {
    try {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    } catch (error) {
        console.error('Error creating todo:', error);
    }
}, [todo]);

    const updateTodo = async () => {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };

  
    useEffect(() => {
      fetchTodos();
      postTodo();
      // removeTodo(todo);
      fetchTodoById(todo.id);
      createTodo();
      updateTitle();

    }, [fetchTodos]);
  

    return (
      <div>
        <h3>Working with Arrays</h3>
        <button className="btn btn-primary m-1" onClick={createTodo} >
          Create Todo
        </button>
        <input
          type="number"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value, 10) })}/>
        <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
        <button onClick={updateTitle} className="btn btn-success m-1">
          Update Title
        </button>
        <input type="text" value={todo.description} 
              onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
        <input type="checkbox" checked={todo.completed}
              onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
       <textarea value={todo.description} onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} />
      {/* <label>
        <input value={todo.completed.toString()} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label> */}
      <button onClick={postTodo}> Post Todo </button>
      <button onClick={() => deleteTodo(todo)}
        className="btn btn-danger float-end ms-2">
        Delete
      </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>



        <h3>Fetching Todos</h3>
        <ul>
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            {/* <button className="btn btn-danger m-1" onClick={() => removeTodo(todo)} >
              Remove
            </button> */}
            <button className="btn btn-orange m-1" onClick={() => fetchTodoById(todo.id)} >
              Edit
            </button>
            {todo.title}
          </li>
        ))}
      </ul>
      </div>
    );
  }
export default WorkingWithArrays;
  
  