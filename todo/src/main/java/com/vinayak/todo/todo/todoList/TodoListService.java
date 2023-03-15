package com.vinayak.todo.todo.todoList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListService {

    @Autowired TodoListRepository todoListRepository;

    public void save(Todo todo) {
        todoListRepository.save(todo);
    }

    public List<Todo> getTodoList() {
        return todoListRepository.findAll();
    }

    public Todo getTodo(int id) {
        List<Todo> todos = todoListRepository.findTodoById(id);
        if (!todos.isEmpty()) {
            return todos.get(0);
        } else return null;
    }

        public Todo update(int id, Todo todo) {
        Todo actualTodo = this.getTodo(id);
        actualTodo.setDate(todo.getDate());
        actualTodo.setName(todo.getName());
        actualTodo.setStatus(todo.getStatus());
        todoListRepository.save(actualTodo);
        return actualTodo;
    }

    public String deleteTodo(int id) {
        List<Todo> todos = todoListRepository.findTodoById(id);
        if (todos.isEmpty()) {
            return "Todo Not Found with Id " + id;
        } else {
            todoListRepository.deleteById(id);
            return "Todo with Id " + id + " deleted";
        }
    }
}
