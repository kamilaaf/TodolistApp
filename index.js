// 1. Reference html element in js
const formtTask = document.querySelector(".form-task");

//2. Menambahkan event listener di elemnet form
formtTask.addEventListener("sumbit", (event) => {
    event.preventDefault();

    // 3. reference html element input
    const inputform = document.querySelector(".input-form");
    console.log(inputform.value);

    // 4. reference html element ul / wrapper list
    const wrapperlist = document.querySelector(".task-list-wrapper")

    // 5. create <li> using js
    const taskList = document.createElement("li");

    //6. masukan input value ke <li>
    taskList.innerHTML = inputform.value;
    // <li>inputvalue</li>
    //7. append <li> ke <ul>
    wrapperlist.append(taskList);
    inputform.value = "";
});