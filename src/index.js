

import './styles.css';
import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo) );


// const tarea = new Todo('Aprender Java Script');
// const tarea1 = new Todo('comprar un unicornio');

// todoList.nuevoTodo( tarea );
// todoList.nuevoTodo( tarea1 );
// tarea.completado = true;

// console.log( todoList );


// console.log( tarea );

// crearTodoHtml( tarea );

console.log('todos', todoList.todos);

todoList.todos[0].imprimirClase();
