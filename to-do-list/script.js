document.addEventListener('DOMContentLoaded',()=>{
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    document.getElementById('addTaskBtn').addEventListener('click',()=>{
        var input=taskInput.value;
        if(input.trim()!==''){
            addTask(input);
            taskInput.value='';
        }
    });

    var addTask=(input)=>{
        var li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" class="checkbox">
                        <span>${input}</span> 
                        <button id="delete"> Delete </button>`;
        taskList.appendChild(li);
        saveTaskToLocal(taskList);
    }

    taskList.addEventListener('click',(e)=>{
        if(e.target.className==='checkbox'){
            e.target.nextElementSibling.classList.toggle('checked');
        }
    })

    taskList.addEventListener('click',(e)=>{
        if(e.target.id==='delete'){
            e.target.parentElement.remove();
        }
    });

    saveTaskToLocal=()=>{
        var tasks=[];
        document.querySelectorAll('li').forEach((task)=>{
            tasks.push(task.textContent);
        });
        localStorage.setItem('task',JSON.stringify(tasks));
    }

    getTaskFromLocal=()=>{
        return JSON.parse(localStorage.getItem('task')) || [];
    }

    window.addEventListener("DOMContentLoaded", ()=>{
        let task = getTaskFromLocal();
        task.forEach((task)=>{
            addTask(task);
        });
    })

    
})