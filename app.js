class TodoApp {
	constructor() {
		this.todos = JSON.parse(localStorage.getItem('todos')) || [];
		this.todoInput = document.getElementById('todoInput');
		this.addButton = document.getElementById('addButton');
		this.todoList = document.getElementById('todoList');

		this.addButton.addEventListener('click', () => this.addTodo());
		this.todoInput.addEventListener('keypress', e => {
			if (e.key === 'Enter') this.addTodo();
		});

		this.renderTodos();
	}

	addTodo() {
		const todoText = this.todoInput.value.trim();
		if (todoText) {
			const todo = {
				id: Date.now(),
				text: todoText,
				completed: false,
			};

			this.todos.push(todo);
			this.saveTodos();
			this.renderTodos();
			this.todoInput.value = '';
		}
	}

	toggleTodo(id) {
		this.todos = this.todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.saveTodos();
		this.renderTodos();
	}

	deleteTodo(id) {
		this.todos = this.todos.filter(todo => todo.id !== id);
		this.saveTodos();
		this.renderTodos();
	}

	saveTodos() {
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	renderTodos() {
		this.todoList.innerHTML = '';
		this.todos.forEach(todo => {
			const li = document.createElement('li');
			li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

			const todoText = document.createElement('span');
			todoText.className = 'todo-text';
			todoText.textContent = todo.text;
			todoText.addEventListener('click', () => this.toggleTodo(todo.id));

			const deleteBtn = document.createElement('button');
			deleteBtn.className = 'delete-btn';
			deleteBtn.textContent = 'Delete';
			deleteBtn.addEventListener('click', () => this.deleteTodo(todo.id));

			li.appendChild(todoText);
			li.appendChild(deleteBtn);
			this.todoList.appendChild(li);
		});
	}
}

// Initialize the app
new TodoApp();
