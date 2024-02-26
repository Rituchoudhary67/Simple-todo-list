/*
    what i have to do in this task?
    step1 :- creating variable for selecting particular element and creating an array   --done
    step2 :- add btn functionality and add event listener                                
    step3 :- delete btn functionality and add event listener                             
    step4 :- local storage applying                                                      
*/

// Step 1: Creating Variable

const addBtn = document.querySelector('.add-btn');
const message = document.querySelector('.message');
const showData = document.querySelector('.show-data');
const inputData = document.querySelector('.input-data');

// creating a blank array
let todoArr = [];

// now creating a new function which calls in addTodos function 
function displayShowData(input) {
    showData.innerHTML += `<div class="js-container">
                                <P class="para">${input}</p>
                                <button class="delete-btn">Delete</button>   
                            </div>`
}



/* A] step2 :- creating a function for add btn*/
function addTodos() {
    let input = inputData.value;
    // console.log(hello);
    if(input == "") {
        message.innerText = "Please Enter the Todos here....";
        setTimeout(() => message.innerText ="",1000);
        return;
        }
    if(todoArr.includes(input)){
            message.innerText = "Duplicate Todo Please enter new todo....";
            setTimeout(() => message.innerText ='',2000);
            return;
        }

        displayShowData(input);
        todoArr.push(input);
        localStorage.setItem('id',JSON.stringify(todoArr))

}

// creating a function for delete btn 
function deleteTodo(e) {
    console.log(e);
    if(e.target.classList.contains('delete-btn')){
        e.target.parentNode.remove();

        const input = e.target.previousElementSibling.innerText;
        const index = todoArr.indexOf(input);
        todoArr.splice(index, 1);
        localStorage.setItem("id", JSON.stringify(todoArr))
    }
}

/* C] step2 :- creteing a function storage data of local storge*/
function localStorageData() {
    const localData = localStorage.getItem('id');
    if(!localData){
        console.log("yes");
        return;
    }
     const localDataArr = JSON.parse(localData);

     localDataArr.forEach(input => {
     displayShowData(input);
     });
}





// Function calling
addBtn.addEventListener('click',addTodos);
showData.addEventListener('click',deleteTodo);
window.addEventListener('load',localStorageData)