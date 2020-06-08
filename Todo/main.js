var todoList =["hello", "abc"];

function addTodo() {
  var x = document.getElementById("todo").value;
  if(x){
  todoList.push(x);
  renderTodo();
  document.getElementById("todo").value = "";
  }
  renderTodo();
}

deleteTodo = () =>{
  var x = document.getElementById("todo").value;
  if(x){
  for( var i = 0; i < todoList.length; i++){ 
  	if ( todoList[i] === x) {
    todoList.splice(i, 1);
    break;
    }
   }
   renderTodo();
   document.getElementById("todo").value = "";
   }
}

updateTodo = () =>{
  var x = document.getElementById("todo").value;
  var y = document.getElementById("updateTodo").value;
  if(x && y){
  for( var i = 0; i < todoList.length; i++){ 
  	if ( todoList[i] === x) {
    todoList[i] = y;
    break;
    }
   }
   renderTodo();
   document.getElementById("todo").value = "";
   document.getElementById("updateTodo").value = "";

   }
}

renderTodo = () =>{
TLen = todoList.length;
text = "<ul>";
for (i = 0; i < TLen; i++) {
  text += "<li>" + todoList[i] + "</li>";
}
text += "</ul>";
document.getElementById("todoList").innerHTML = text;
}