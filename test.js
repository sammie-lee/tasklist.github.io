window.addEventListener('load', () => {
    const task_input =document.querySelector("#new-task-input");
    const addBtn = document.querySelector("#new-task-submit");
    const tasks_container = document.querySelector("#tasks-container");

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const task = task_input.value;
        
        if(task === ""){
            alert("Enter something");
        } else {
            // Creating Container Parent
            const task_content_parent = document.createElement("div");
            task_content_parent.classList.add("task");

            // Creating Container Parent
            const task_parent = document.createElement("div");
            task_parent.classList.add("task");
            // Creating another Container Parent
            const content_parent = document.createElement("div");
            content_parent.classList.add("content");

            // Creating Task Input
            const task_input = document.createElement("input");
            task_input.classList.add("text");
            task_input.type = 'text';
            task_input.value = task;
            task_input.setAttribute("readOnly", "readOnly");

            // Adding Children
            content_parent.appendChild(task_input);
            task_parent.appendChild(content_parent);

            // Adding buttons
            const buttons = document.createElement("div");
            buttons.classList.add("actions");

            const edit_button = document.createElement("button");
            edit_button.classList.add("edit");
            edit_button.innerText='Edit';
            buttons.appendChild(edit_button);

            const delete_button= document.createElement("button");
            delete_button.classList.add("delete");
            delete_button.innerText='Delete';
            buttons.appendChild(delete_button);

            task_parent.appendChild(buttons);
            tasks_container.appendChild(task_parent);

            delete_button.addEventListener('click', (e) => {
                alert("Are you sure you want to delete this item?");
                task_parent.removeChild(content_parent);
            });

        };
    });
});

