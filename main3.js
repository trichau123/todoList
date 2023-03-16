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
       //create div task
       const task_el  = document.createElement("div");
       task_el.classList.add("task");

       const task_content_el = document.createElement("div");
       task_content_el.classList.add("content");
       task_content_el.innerText = task;

       task_el.appendChild(task_content_el);
       //add in 3
       const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type ="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");

       // task_content_el.appendChild(task_input_el);

       //create div for button edit and delete
      const task_action_el = document.createElement("div");
      task_action_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML ="Edit";

      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML="Delete";
      //add 2 button to the action div
      task_action_el.appendChild(task_edit_el);
      task_action_el.appendChild(task_delete_el);
        //
    task_el.appendChild(task_action_el);

       list_el.appendChild(task_el);
    })

    })