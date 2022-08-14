const input = document.querySelector('#input-text');
const task = document.querySelector('#tasks');
// var btn = document.querySelector('#tasks');

document.querySelector('#push').onclick = function(){
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }
    else {
        task.innerHTML += `
            
        <div class="task">
            <div class="task-content">
                <input type="checkbox"/>
                <span id="taskname">${input.value}</span>
            </div>
            <div class="task-btn">
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
            </div>
        </div>
            
        `;

        input.value="";

        handle_delete();
    }
}

handle_delete();

function handle_delete(){
    var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }
}
