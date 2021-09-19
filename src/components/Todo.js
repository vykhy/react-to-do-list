import React from 'react';
import Item from './Item'

const Todo = ({ todos, setToDos, filtered }) => {

    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {filtered.map( todo => (
                    <Item 
                        todos={todos} 
                        setToDos={setToDos} 
                        todo = {todo}
                        key={todo.id} 
                        text={todo.text}/>
                ))}
            </ul>
        </div>
    )
}

export default Todo;
