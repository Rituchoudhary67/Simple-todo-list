
/*
    what i have to do in this task?
    step1 :- creating variable for selecting particular element and creating an array    --done
    step2 :- add btn functionality and add event listener                                --done
    step3 :- delete btn functionality and add event listener                             --done
    step4 :- local storage applying                                                      --done
*/

const addBtn = document.querySelector('.add-btn');
const message = document.querySelector('.message');
const showData = document.querySelector('.show-data');
const inputText = document.querySelector('.input-text');

let todoArr = [];

/* A] step3 :- sub-step for add data with creating function sepretely*/
function addToShowData(input) {
    showData.innerHTML +=`<div class="continer">
                                <p class="para">${input}</p>
                                <button class="delete">DELETE</delete>
                         </div>`
}


/* A] step2 :- creating a function for add btn*/
function addTodos() {
    let input = inputText.value;
    // console.log(input)
    if(input == ""){
                    message.innerText = "Please Enter todos here...";
                    setTimeout(() => message.innerText ='',1000);
                    return;
                   }
    if(todoArr.includes(input)){
                   message.innerText = "Duplicate Todo please Enter new todo...";
                   setTimeout(() => message.innerText ='',2000)
                   return;
    }
    /* sub-step creting another function for prevention of repetation of code*/
    addToShowData(input);
    todoArr.push(input);
    localStorage.setItem('id',JSON.stringify(todoArr));
}

/* B] step2 :- creating a function for deleting functionality*/
function deleteTodo(e) {
    console.log(e);
    if(e.target.classList.contains('delete')){
                e.target.parentNode.remove();
        
                const input = e.target.previousElementSibling.innerText;
                // console.log(input)
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
     addToShowData(input);
     });
}

/* A] step1 :- add event listener on add btn*/
addBtn.addEventListener('click',addTodos);
/* B] step1 :-add event listener on show data for deleting the parent node*/
showData.addEventListener('click',deleteTodo);
/* C] step1 :- add event listener on window for localstorage*/
window.addEventListener('load',localStorageData)