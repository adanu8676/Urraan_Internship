let inputs = document.getElementById("inp");
let taskList = document.getElementById("taskList");

function add() {
    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        taskList.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector("i").addEventListener("click", remove);

        function remove() {
            newEle.remove();
        }
    }
}
