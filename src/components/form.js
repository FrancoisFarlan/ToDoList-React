import {useState} from "react";

const Form = ({todos, addTodo}) => {

    const [todo, setTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input type="text"
                   value={todo}
                   onChange={(e)=> {
                    setTodo(e.target.value);
                   }}
                   placeholder="Ajouter une tâche"
                   required
            />
            <button>Ajouter</button>
        </form>
    )
}

export default Form;