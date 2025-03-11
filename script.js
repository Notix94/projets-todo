const nomTache = document.querySelector(".nom-tache");
const btnAjout = document.querySelector(".btn-ajout-tache");
const listTache = document.querySelector("#taskList");
const listTacheFini = document.querySelector("#taskListFinish");
const btnterm = document.querySelector(".termBtn");
const btndelet = document.querySelector(".deleteBtn");
const box_check_all = document.querySelector(".btn_check_all");
//creer une tache
btnAjout.addEventListener("click", function () {
  const recupText = nomTache.value.trim();

  if (recupText !== "") {
    nvtache = document.createElement("li");
    nvtache.innerHTML = `
    <span class="recupText">${recupText}</span>
    
    <input type="checkbox"class="taskCheckbox">
    
  `;
  }
  listTache.appendChild(nvtache);
});

//sup une tache
btndelet.addEventListener("click", function () {
  document.querySelectorAll(".taskCheckbox:checked").forEach((checkbox) => {
    checkbox.parentElement.remove();
  });
});
//permet de check all
box_check_all.addEventListener("change", function () {
  if (this.checked) {
    console.log("cool");
    document.querySelectorAll(".taskCheckbox").forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    console.log("cooloooo");
    document.querySelectorAll(".taskCheckbox").forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});

btnterm.addEventListener("click", function () {
  console.log("salut");
  document.querySelectorAll(".taskCheckbox:checked").forEach((checkbox) => {
    listTacheFini.appendChild(checkbox.parentElement);
    checkbox.checked = false;
  });
});
