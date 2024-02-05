import { useState, useEffect } from 'react';

function ToDoList () {
const [title, setTitle] = useState('');
const [bodytext, setBodytext] = useState('')
const [todo, setTodo] = useState([])


const handleTitleInput = (e) => {
    setTitle(e.target.value);
};


const handleBodyTextInput = (e) => {
    setBodytext(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (title && bodytext) {
        setTodo([...todo, {id: todo.length + 1, title, bodytext}])
        setTitle('');
        setBodytext('');
    }
}

const handleDeleteTask = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id));
      }


    return(

        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' name="title" placeholder='Title...' value={title} onChange={handleTitleInput}/>
            <input type='text' name="bodytext" placeholder='Write your todo...' value={bodytext} onChange={handleBodyTextInput}/>
            <button type="submit">Add To Do</button>
            </form>
           
         
            <ul>
            
                {todo.map(item => (
                                
                    <ul key={item.id}>
                 
                         <h2> Title: {item.title} </h2><h4>to do... <br></br>{item.bodytext}</h4>
                         <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
                    </ul>
                    
                     
                ))}
            </ul> 
        </div>

    );
                
}

export default ToDoList