//wait for the window to load 
//new-task-form is id of the form
window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    //prevent page refesh
    form.addEventListener('submit',(e)=>{
        //this will keep information even refresh page
        e.preventDefault();

        const task = input.value;
        //get value from input task
        if(!task){
            alert("Please enter a task");
            return;
        }
       //added
       const task_el  = document.createElement("div");
       task_el.classList.add("task");

       const task_content_el = document.createElement("div");
       task_content_el.classList.add("content");
       task_content_el.innerText = task;

       task_el.appendChild(task_content_el);
       list_el.appendChild(task_el);
    })

    })