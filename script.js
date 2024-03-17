// get form data
const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const taskInput = form.taskInput;
  let task = taskInput.value;
  createListItem(task)
  taskInput.value = "";
})

function createListItem(task = "Get to Work!") {
  const list = document.getElementById("list");
  
  const li = document.createElement("li");
  li.classList.add("list-item");

  const span = document.createElement("span");
  span.classList.add("task")
  addListenerToggleComplete(span);
  span.innerText = task;
  li.appendChild(span);

  const deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Delete");
  deleteButton.classList.add("delete-button");
  addListenerDelete(deleteButton);
  li.appendChild(deleteButton)

  list.appendChild(li);
}

function addListenerToggleComplete(node) {
  node.addEventListener("click", (e) => {
    node.classList.toggle("complete");
    node.nextSibling.classList.toggle("allow-delete");
  })
}

function addListenerDelete(node) {
  node.addEventListener("click", (e) => {
    if (node.classList.contains("allow-delete")) {
      node.parentNode.remove();
    } else {
      alert("But did you finish tho?")
    }
  })
}