package com.vinayak.todo.todo;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestDB {
        public static void main(String[] args) {

            String jdbcUrl = "jdbc:mysql://localhost:3306/todoList?useSSL=false&serverTimezone=UTC";
            String user = "hbstudent";
            String pass = "Verve@1234";
            try {
                System.out.println("Connecting to Database: " + jdbcUrl);

                Connection myConn = DriverManager.getConnection(jdbcUrl, user, pass);
                System.out.println("Connection Successfull");
            } catch (Exception exc) {
                exc.printStackTrace();
            }
        }
    }
