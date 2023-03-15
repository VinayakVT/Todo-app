import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const TodoUpdate = (props) => {
    const history = useHistory()
    const { todoId } = useParams()
    const [todo, setTodo] = useState({})
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')

    const fetchData = async () => {
        const todo = await fetch(`http://localhost:8080/todoList/${todoId}`)
            .then((response) => response.json())
        setTodo(todo)
        setName(todo.name)
        setDate(todo.date.split('T')[0])
        setStatus(todo.status)
    }

    useEffect(fetchData, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        todo.name = name
        todo.date = date
        todo.status = status
        const response = await fetch(`http://localhost:8080/todoList/${todo.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        if (response.status === 200) {
            history.push("/")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="col-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input className="form-control" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="date" className="form-label">Date</label>
            <input className="form-control" type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label htmlFor="status" className="form-label">Status</label>
            <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value={true}>Completed</option>
                <option value={false}>In Process</option>
            </select>
            <input type="submit" className="btn btn-success" />
            <Link to={"/"}>
                <button className="btn btn-danger m-2">Cancel</button>
            </Link>
        </form>

    )
}

export default TodoUpdate;