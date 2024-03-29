document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let myForm = document.querySelector("#create-task-form");
  myForm.addEventListener("submit", function (event){
    event.preventDefault();
    alert('Hombre you suck big time')
  })
});
