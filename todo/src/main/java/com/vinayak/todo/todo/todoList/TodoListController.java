package com.vinayak.todo.todo.todoList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/todoList")
public class TodoListController {

    @Autowired TodoListService todoListService;

    @GetMapping("/hello")
    public String getHelloWorld() {
        return "Hello World";
    }

    @GetMapping("/")
    public List<Todo> getTodoList() {
        return todoListService.getTodoList();
    }

    @GetMapping("/{id}")
    public Todo getTodo(@PathVariable int id) {
        return todoListService.getTodo(id);
    }

    @PostMapping("/")
    public void saveTodo(@RequestBody Todo todo) {
         todoListService.save(todo);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable int id, @RequestBody Todo todo) {
        return todoListService.update(id, todo);
    }

    @DeleteMapping("/{id}")
    public String deleteTodo(@PathVariable int id) {
        return todoListService.deleteTodo(id);
    }

}
