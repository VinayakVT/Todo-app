import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TodoIndex = () => {
    const [todoList, setTodoList] = useState([])

    const fetchData = async () => {
        const todoList = await fetch("http://localhost:8080/todoList/")
            .then((response) => response.json())
        setTodoList(todoList)
    }

    const handleDeleteClick = async (e) => {
        await fetch(`http://localhost:8080/todoList/${e.target.value}`, {
            method: 'DELETE'
        })
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <table border={1} className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((todo) => (
                            (todo.name !== "" && todo.date !== null) ? <tr key={todo.id}>
                                <td>{todo.name}</td>
                                <td>{todo.date.split('T')[0]}</td>
                                <td>{todo.status ? "Completed" : "In Process"}</td>
                                <td><Link to={`/update/${todo.id}`}>
                                    <button className="btn btn-primary">Update</button>
                                </Link></td>
                                <td><button className="btn btn-danger" onClick={handleDeleteClick} value={todo.id}>Delete</button>
                                </td>
                            </tr> : <tr key={todo.id}></tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to={"/add"}>
                <button className="btn btn-success">Add New Todo</button>
            </Link>
        </div>

    )
}

export default TodoIndex;