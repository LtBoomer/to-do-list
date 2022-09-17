const addTask = document.querySelector("button");
const taskInput = document.querySelector("input");
const list = document.querySelector(".list");
let updateButtons;
let updateClick = false;
let i = -1;
let deleteButton;
let checkButton;
let taskList = [];

const refreshTaskList = (task) => {
  list.innerHTML += `
  <div class="task">
  ${task.edit ? `<input placeholder=${task.text} />` : `<p>${task.text}</p>`}
    <div class="icons">
      <img src="https://img.icons8.com/material-outlined/24/000000/checked--v1.png" class="checkboi"/>
      <img src="https://img.icons8.com/pastel-glyph/24/000000/loop.png" class="update"/>
      <img src="https://img.icons8.com/material-rounded/24/000000/trash.png" class="delete" id=${
        task.id
      }/>
    </div>
  </div>
  `;
  updateButton = document.querySelector(".update");
  deleteButtons = document.querySelectorAll(".delete");
  checkButton = document.querySelector(".checkboi");

  console.log(deleteButtons);

  deleteButtons.forEach((element) => {
    element.addEventListener("click", () => {
      taskList = taskList.filter(
        (task) => task.id !== +element.getAttribute("id")[0]
      );
      list.innerHTML = " ";
      taskList.forEach((item) => {
        refreshTaskList(item);
      });
    });
  });

  updateButton.addEventListener("click", () => {});

  checkButton.addEventListener("click", () => {});
};

const addTaskFunction = (task) => {
  console.log("task>>>>", task);
  taskList = [...taskList, task];
  console.log(taskList);

  list.innerHTML += `
  <div class="task">
    ${task.edit ? `<input placeholder=${task.text} />` : `<p>${task.text}</p>`}
    <div class="icons">
      <img src="https://img.icons8.com/material-outlined/24/000000/checked--v1.png" class="checkboi"/>
      <img src="https://img.icons8.com/pastel-glyph/24/000000/loop.png" class="update"/>
      <img src="https://img.icons8.com/material-rounded/24/000000/trash.png" class="delete" id=${
        task.id
      } />
    </div>
  </div>
  `;

  updateButtons = document.querySelectorAll(".update");
  deleteButtons = document.querySelectorAll(".delete");
  checkButton = document.querySelector(".checkboi");

  deleteButtons.forEach((element) => {
    element.addEventListener("click", () => {
      taskList = taskList.filter(
        (task) => task.id !== +element.getAttribute("id")
      );
      list.innerHTML = " ";
      taskList.forEach((item) => {
        refreshTaskList(item);
      });
    });
  });

  updateButtons.forEach((element) => {
    element.addEventListener("click", () => {
      taskList.forEach((item) => {
        if (item.id === +element.getAttribute("id")) {
          console.log(item.id)
          // taskList[+element.getAttribute("id")].edit = true;
          // list.innerHTML = " ";
          // taskList.forEach((item) => {
          //   refreshTaskList(item);
          // });
        }
      
      });
      // if(+element.getAttribute("id") === index){
      //   console.log("da")
      //   console.log(element)
      // }
    });
  });

  checkButton.addEventListener("click", () => {});
};

addTask.addEventListener("click", () => {
  if (taskInput.value !== "") {
    i++;
    addTaskFunction({
      id: i,
      text: taskInput.value,
      check: false,
      edit: false,
    });
  }
});
