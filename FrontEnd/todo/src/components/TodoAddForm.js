import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const TodoAddForm = () => {
    const history = useHistory()
    const [todo] = useState({})
    const [name, setName] = useState('')
    const [date, setDate] = useState()
    const [status, setStatus] = useState(Boolean)

    const handleSubmit = async (e) => {
        e.preventDefault()
        todo.name = name
        todo.date = date
        todo.status = status
        if (todo.name === "" || todo.date === undefined) {
            alert("All Fields are Compulsory")
        } else {
            const result = await fetch("http://localhost:8080/todoList/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(todo)
            })
            if (result.status === 200) {
                history.push("/")
            }
        }
    }

    return (
        <div className="col-6">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select id="status" className="form-select" onChange={(e) => setStatus(e.target.value)}>
                        <option value={true} defaultChecked>Complete</option>
                        <option value={false}>Incomplete</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-success" />
                <Link to={"/"}>
                    <button className="btn btn-danger m-2">Cancel</button>
                </Link>
            </form>

        </div>

    )
}

export default TodoAddForm;