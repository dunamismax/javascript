class TodoApp {
    constructor() {
        this.apiUrl = 'http://localhost:3002/api';
        this.todos = [];
        this.currentFilters = {
            category: 'all',
            priority: 'all',
            status: 'all'
        };
        
        this.elements = {
            todoForm: document.getElementById('todoForm'),
            todoInput: document.getElementById('todoInput'),
            prioritySelect: document.getElementById('prioritySelect'),
            categorySelect: document.getElementById('categorySelect'),
            todoList: document.getElementById('todoList'),
            loadingSpinner: document.getElementById('loadingSpinner'),
            emptyState: document.getElementById('emptyState'),
            categoryFilter: document.getElementById('categoryFilter'),
            priorityFilter: document.getElementById('priorityFilter'),
            statusFilter: document.getElementById('statusFilter'),
            totalTodos: document.getElementById('totalTodos'),
            completedTodos: document.getElementById('completedTodos'),
            pendingTodos: document.getElementById('pendingTodos')
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadTodos();
        this.loadStats();
    }
    
    setupEventListeners() {
        this.elements.todoForm.addEventListener('submit', (e) => this.handleAddTodo(e));
        this.elements.categoryFilter.addEventListener('change', (e) => this.handleFilterChange('category', e.target.value));
        this.elements.priorityFilter.addEventListener('change', (e) => this.handleFilterChange('priority', e.target.value));
        this.elements.statusFilter.addEventListener('change', (e) => this.handleFilterChange('status', e.target.value));
    }
    
    async handleAddTodo(e) {
        e.preventDefault();
        
        const text = this.elements.todoInput.value.trim();
        const priority = this.elements.prioritySelect.value;
        const category = this.elements.categorySelect.value;
        
        if (!text) return;
        
        try {
            const newTodo = await this.createTodo({ text, priority, category });
            this.todos.unshift(newTodo);
            this.renderTodos();
            this.updateStats();
            
            // Reset form
            this.elements.todoInput.value = '';
            this.elements.prioritySelect.value = 'medium';
            this.elements.categorySelect.value = 'general';
        } catch (error) {
            console.error('Error creating todo:', error);
            alert('Failed to create todo. Please try again.');
        }
    }
    
    handleFilterChange(filterType, value) {
        this.currentFilters[filterType] = value;
        this.renderTodos();
    }
    
    async loadTodos() {
        this.showLoading();
        
        try {
            const response = await fetch(`${this.apiUrl}/todos`);
            if (!response.ok) throw new Error('Failed to fetch todos');
            
            this.todos = await response.json();
            this.renderTodos();
        } catch (error) {
            console.error('Error loading todos:', error);
            this.showError('Failed to load todos');
        } finally {
            this.hideLoading();
        }
    }
    
    async loadStats() {
        try {
            const response = await fetch(`${this.apiUrl}/stats`);
            if (!response.ok) throw new Error('Failed to fetch stats');
            
            const stats = await response.json();
            this.updateStatsDisplay(stats);
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    }
    
    async createTodo(todoData) {
        const response = await fetch(`${this.apiUrl}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoData)
        });
        
        if (!response.ok) throw new Error('Failed to create todo');
        return await response.json();
    }
    
    async updateTodo(id, updates) {
        const response = await fetch(`${this.apiUrl}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        });
        
        if (!response.ok) throw new Error('Failed to update todo');
        return await response.json();
    }
    
    async deleteTodo(id) {
        const response = await fetch(`${this.apiUrl}/todos/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete todo');
        return await response.json();
    }
    
    async handleToggleComplete(id, completed) {
        try {
            const updatedTodo = await this.updateTodo(id, { completed });
            const todoIndex = this.todos.findIndex(todo => todo.id === id);
            if (todoIndex !== -1) {
                this.todos[todoIndex] = updatedTodo;
                this.renderTodos();
                this.updateStats();
            }
        } catch (error) {
            console.error('Error updating todo:', error);
            alert('Failed to update todo. Please try again.');
        }
    }
    
    async handleDeleteTodo(id) {
        if (!confirm('Are you sure you want to delete this task?')) return;
        
        try {
            await this.deleteTodo(id);
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.renderTodos();
            this.updateStats();
        } catch (error) {
            console.error('Error deleting todo:', error);
            alert('Failed to delete todo. Please try again.');
        }
    }
    
    filterTodos() {
        return this.todos.filter(todo => {
            const categoryMatch = this.currentFilters.category === 'all' || todo.category === this.currentFilters.category;
            const priorityMatch = this.currentFilters.priority === 'all' || todo.priority === this.currentFilters.priority;
            const statusMatch = this.currentFilters.status === 'all' || 
                (this.currentFilters.status === 'completed' && todo.completed) ||
                (this.currentFilters.status === 'pending' && !todo.completed);
            
            return categoryMatch && priorityMatch && statusMatch;
        });
    }
    
    renderTodos() {
        const filteredTodos = this.filterTodos();
        const todoList = this.elements.todoList;
        
        if (filteredTodos.length === 0) {
            todoList.innerHTML = '';
            this.showEmptyState();
            return;
        }
        
        this.hideEmptyState();
        
        todoList.innerHTML = filteredTodos.map(todo => this.createTodoHTML(todo)).join('');
        
        // Add event listeners to checkboxes and buttons
        filteredTodos.forEach(todo => {
            const checkbox = document.getElementById(`checkbox-${todo.id}`);
            const deleteBtn = document.getElementById(`delete-${todo.id}`);
            
            checkbox.addEventListener('change', (e) => {
                this.handleToggleComplete(todo.id, e.target.checked);
            });
            
            deleteBtn.addEventListener('click', () => {
                this.handleDeleteTodo(todo.id);
            });
        });
    }
    
    createTodoHTML(todo) {
        const createdDate = new Date(todo.created_at).toLocaleDateString();
        
        return `
            <div class="todo-item ${todo.completed ? 'completed' : ''}">
                <input 
                    type="checkbox" 
                    id="checkbox-${todo.id}" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                />
                <div class="todo-content">
                    <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                    <div class="todo-meta">
                        <span class="todo-priority ${todo.priority}">${todo.priority}</span>
                        <span class="todo-category">${todo.category}</span>
                        <span class="todo-date">${createdDate}</span>
                    </div>
                </div>
                <div class="todo-actions">
                    <button class="btn-delete" id="delete-${todo.id}">Delete</button>
                </div>
            </div>
        `;
    }
    
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(todo => todo.completed).length;
        const pending = total - completed;
        
        this.elements.totalTodos.textContent = total;
        this.elements.completedTodos.textContent = completed;
        this.elements.pendingTodos.textContent = pending;
    }
    
    updateStatsDisplay(stats) {
        this.elements.totalTodos.textContent = stats.total || 0;
        this.elements.completedTodos.textContent = stats.completed || 0;
        this.elements.pendingTodos.textContent = stats.pending || 0;
    }
    
    showLoading() {
        this.elements.loadingSpinner.classList.remove('hidden');
        this.elements.todoList.classList.add('hidden');
        this.elements.emptyState.classList.add('hidden');
    }
    
    hideLoading() {
        this.elements.loadingSpinner.classList.add('hidden');
        this.elements.todoList.classList.remove('hidden');
    }
    
    showEmptyState() {
        this.elements.emptyState.classList.remove('hidden');
    }
    
    hideEmptyState() {
        this.elements.emptyState.classList.add('hidden');
    }
    
    showError(message) {
        alert(message);
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});