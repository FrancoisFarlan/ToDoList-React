const List = ({todos, toggleDone, deleteTodo}) => {


    return(
        <ul>
            { todos.map((todo, index) => {
                return( <li key={index} className={(todo.done ?"done":null)}>
                    <i className={"far fa-2x " + (todo.done ?"fa-check-square":"fa-square")}
                       onClick={ () => {toggleDone(index) } }
                    ></i>
                    <span>{todo.description}</span>
                    <button onClick={ () => {
                        deleteTodo(index)
                    } }>
                        <i className="fas fa-trash fa-2x"></i>
                    </button>
                </li>)
            })}


        </ul>
    )
}

export default List;