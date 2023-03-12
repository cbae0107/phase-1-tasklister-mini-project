document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
    makeTaskDescription(e.target.new_task_description.value)
    form.reset()
  })
});
function makeTaskDescription(taskdescription){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = "x"
  p.textContent = `${taskdescription} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#list").appendChild(p)
  btn.addEventListener("click", makeDelete)
   
}  
function makeDelete(e){
  e.target.parentNode.remove()
}