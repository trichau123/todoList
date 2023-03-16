//wait for the window to load 
//new-task-form is id of the form
window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#task-list");
    //prevent page refesh
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value;
        //get value from input task
        if(!task){
            alert("Please enter a task");
            return;
        }
       
    })

    })