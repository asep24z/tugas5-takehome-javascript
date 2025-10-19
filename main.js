const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '×';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    }
});

// Add task with Enter
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addButton.click();
    }
});
