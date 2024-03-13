const todoList=[{
     name : 'dinner',
     dueDate : '2004-12-7',
}
];
todoList.splice(0,1);
function renderTodoList(){
    let todoListHTML = '';

    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name,dueDate} = todoObject;
        const html = `
        <div style="color: white;">${name}</div> 
        <div style="color: white;">${dueDate}</div>
        <button class="delete-button" onclick="
        todoList.splice(${i},1);
        renderTodoList();
        ">Delete</button>
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo').innerHTML= todoListHTML;
}

function addtodo(){
    const inputElement = document.querySelector('.inputtxt');
    const name = inputElement.value;
    const dateinputElement = document.querySelector('.datetxt');
    const dueDate = dateinputElement.value;
    //console.log(y);
    todoList.push({
        name : name,
        dueDate : dueDate
        
    });
    inputElement.value='';
    dateinputElement.value='';

    renderTodoList();
}