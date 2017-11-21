

function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
  const newToDoText = document.getElementById('newToDoText');
  if (!newToDoText.value) {return; }
  id++;
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
 const toDoList = document.getElementById('toDoList');

 toDoList.textContent = '';

 toDos.forEach(function(toDo) {
   const newLi = document.createElement('li');
   const checkbox = document.createElement('input');
   // create delete button
  const removeToDo = document.createElement('button');

   checkbox.type = "checkbox";
   removeToDo.innerHTML ="delete";


   newLi.textContent = toDo.title;

   toDoList.appendChild(newLi);
   newLi.appendChild(checkbox);
   newLi.appendChild(removeToDo);

   removeToDo.addEventListener('click', function(e) {
    toDos = toDos.filter((toDo2) => {
      console.log(toDo2.id);
      if(toDo2.id == toDo.id){
      return false;
    }else{
      return true;
    }
     });
      renderTheUI();
});

});

  }

  addToDoForm.addEventListener('submit', event =>{
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}



window.onload = function() {
onReady();
};
