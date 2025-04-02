let addBtn = document.getElementById("addBtn");
let listContainer = document.getElementById("tasks-container");

addBtn.addEventListener("click", createTask);
function createTask() {
  let inputValue = document.getElementById("newTask").value;
  if (!inputValue) {
    alert("Please enter a task!");
    return;
  }
  listContainer.innerHTML += `
    <li class= "list-group-item task">${inputValue}</li>`;
    addListener();
  document.getElementById("newTask").value = "";
}

function removeItem() {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => {
        this.remove();
    }, 1000);
}


function addListener() {
    let items = document.querySelectorAll(".task");
    items.forEach((item)=>{
        item.addEventListener("click",removeItem);
    });
}