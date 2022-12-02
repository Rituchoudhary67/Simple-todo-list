const addBtn = document.querySelector(".add-btn");
const formInput = document.querySelector(".input-box");
const todosList = document.querySelector(".todo-list-ul");
const inputMsg = document.querySelector(".empty-msg")
let todosArr = [];
let count = 0;

/*step3 :- todos are stored in li so createlist item*/
function createListItem(todo) {
    const listItem = document.createElement('li');
    listItem.setAttribute("id", todo.id);
    listItem.innerHTML = `<div>
                             <span>${todo.text}</span>
                             <button class="delete">Delete</button>
                         </div>`
    todosList.appendChild(listItem);
}

/* step2 :-making fun for adding todos*/
function addToDos(e) {
    e.preventDefault();
    if (formInput.value == "") {
        inputMsg.innerText = "Please enter the todo ..."
        setTimeout(() => inputMsg.innerText = '', 1000);
    } else {
        const todo = {
            id: count++,
            text: formInput.value,
        };
        todosArr.push(todo);
        createListItem(todo);
    }
}


/*STEP1 :- adding event listener and making one fun for add btn*/
addBtn.addEventListener('click',addToDos)

/*step2 :- makeing one fun for delete operation  */
function deleteToDo(el) {
    // todosArr.forEach((ele, index) => {
    //     if (ele.id == parseInt(el.path[2].id)) todosArr.splice(index, 1);
    // })
    console.log(el)
    el.path[2].remove();
}


/*step1 :- deleting li*/
todosList.addEventListener('click',(el) => {
    if (el.target.classList.contains("delete")) {
        deleteToDo(el);
    }
})