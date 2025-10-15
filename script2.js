const listInput = document.getElementById("listInput");
const contentContainer = document.querySelector(".content-container");

function addList() {
    const task = listInput.value.trim();
    if (!task) return alert("Please enter a task!");

    // Create task container
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");

    // Task text
    const taskText = document.createElement("span");
    taskText.textContent = task;

    // Buttons container
    const btnContainer = document.createElement("div");

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("task-btn", "edit-btn");
    editBtn.onclick = () => {
        const newTask = prompt("Edit your task:", taskText.textContent);
        if (newTask) taskText.textContent = newTask;
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("task-btn", "delete-btn");
    deleteBtn.onclick = () => taskDiv.remove();

    // Append buttons
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    // Append text and buttons
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(btnContainer);

    // Add to container
    contentContainer.appendChild(taskDiv);

    // Clear input
    listInput.value = "";
}