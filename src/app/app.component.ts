import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "todo-app";
  todos = [
    {
      label: "Finish app",
      done: false,
    },
    {
      label: "Tech interview ",
      done: false,
    },
  ];

  addItem(newItem) {
    var newTodo = {
      label: newItem,
      done: false,
    };
    this.todos.push(newTodo);
  }

  removeItem(todo) {
    this.todos = this.todos.filter((item) => item.label !== todo.label);
  }

  completeItem(todo) {
    console.log(todo.label);
    todo.done = true;
  }
}
