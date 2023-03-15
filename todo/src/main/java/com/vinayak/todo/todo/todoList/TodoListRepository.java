package com.vinayak.todo.todo.todoList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoListRepository extends JpaRepository<Todo, Integer> {
    List<Todo> findTodoById(int id);
}

