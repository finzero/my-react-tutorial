import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Task = ({ task, isDone }) => {
  return (
    <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
      {task}
    </span>
  );
};

const TodoList = ({ todo, remove, markAsDone }) => (
  <div className="mt-2">
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>Todo List</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {todo.map((t, i) => (
          <tr key={i} className={i % 2 === 0 ? 'table-primary' : 'table-light'}>
            <td>
              <Task task={t.task} isDone={t.isDone} />
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => remove(i)}>
                Remove
              </button>
              <button
                className="btn btn-info ms-1"
                onClick={() => markAsDone(i)}
              >
                Mark As Done
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CustomHook = () => {
  const [todo, setTodo] = useState([]);
  const inputTodo = useRef();

  const handleAddTodo = () => {
    if (inputTodo.current.value) {
      setTodo((todo) => [
        ...todo,
        {
          task: inputTodo.current.value,
          isDone: false,
        },
      ]);
    }
  };

  const handleRemoveTodo = (idx) => {
    setTodo((todo) => todo.filter((t, i) => i !== idx));
  };

  const handleMarkAsDone = (idx) => {
    const updatedTodo = [...todo];
    updatedTodo[idx].isDone = true;
    setTodo(updatedTodo);
  };

  useEffect(() => {
    inputTodo.current.value = '';
  }, [todo]);

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <input className="form-control" placeholder="ToDo" ref={inputTodo} />
        </div>
        <div className="col-4">
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Add ToDo
          </button>
        </div>
      </div>
      <div className="row">
        <TodoList
          todo={todo}
          remove={handleRemoveTodo}
          markAsDone={handleMarkAsDone}
        />
      </div>
    </div>
  );
};

export default CustomHook;
