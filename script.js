const addTask = document.querySelector("button");
const taskInput = document.querySelector("input");
const list = document.querySelector(".list");
let updateButtons;
let currentTask;
let updateClick = false;
let i = -1;
let deleteButton;
let checkButton;
let taskList = [];

const keyPress = (event, id) => {
  const inputUpdate = document.querySelector(".task-edit");
  taskList.forEach((task) => {
    if (task.id === +id && event.key === "Enter") {
      task.edit = false;
      task.text = inputUpdate.value;
      list.innerHTML = " ";
      taskFunction(taskList, "update");
    }
  });
};

const taskCard = (task) => {
  list.innerHTML += `
  <div class="task ${task.check ? "green" : ""}">
    ${
      task.edit
        ? `<input onkeypress="keyPress(event, ${task.id})" placeholder=${task.text} class="task-edit" />`
        : `<p>${task.text}</p>`
    }
    <div class="icons">
      <img src="https://img.icons8.com/material-outlined/24/000000/checked--v1.png" class="checkboi" id=${
        task.id
      } />
      <img src="https://img.icons8.com/pastel-glyph/24/000000/loop.png" class="update" id=${
        task.id
      } />
      <img src="https://img.icons8.com/material-rounded/24/000000/trash.png" class="delete" id=${
        task.id
      } />
    </div>
  </div>
  `;
};

const taskFunction = (task, action) => {
  console.log("task>>>>", task);
  switch (action) {
    case "add":
      taskList = [...taskList, task];
      taskCard(task);
      break;
    case "delete":
    case "update":
    case "check":
      task.forEach((item) => {
        taskCard(item);
      });
      break;
    default:
      break;
  }

  updateButtons = document.querySelectorAll(".update");
  deleteButtons = document.querySelectorAll(".delete");
  checkButton = document.querySelectorAll(".checkboi");
  currentTask = document.querySelectorAll(".task");

  deleteButtons.forEach((element) => {
    element.addEventListener("click", () => {
      taskList = taskList.filter(
        (task) => task.id !== +element.getAttribute("id")
      );
      list.innerHTML = " ";
      taskFunction(taskList, "delete");
    });
  });

  updateButtons.forEach((element) => {
    element.addEventListener("click", () => {
      taskList.forEach((item) => {
        if (item.id === +element.getAttribute("id")) {
          item.edit = true;
        }
      });
      list.innerHTML = " ";
      taskFunction(taskList, "update");
    });
  });

  checkButton.forEach((item) => {
    item.addEventListener("click", () => {
      taskList.forEach((task) => {
        if (task.id === +item.getAttribute("id")) {
          task.check = true;
          list.innerHTML = " ";
          taskFunction(taskList, "check");
        }
      });
    });
  });
};

addTask.addEventListener("click", () => {
  if (taskInput.value !== "") {
    i++;
    taskFunction(
      {
        id: i,
        text: taskInput.value,
        check: false,
        edit: false,
      },
      "add"
    );
  }
  taskInput.value = "";
});
