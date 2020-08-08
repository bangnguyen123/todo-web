document.addEventListener("DOMContentLoaded",getTodoBackPage());
$("#txt1").on("keyup",function(e) {
  if (e.keyCode == 13 & $("#txt1").val() != ""){
    let todo = $("#txt1").val();
    saveLocalStorage_today(todo);
    let task = $("<div class='task1'></div>").text($("#txt1").val());
    let check_icon = $("<i class='fa fa-check'></i>").click(function(){
      let f = $(this).parent();
      f.css("textDecoration","line-through");
     });
    let del_icon = $("<i i class='fa fa-trash-o'></i>").click(function(){
      let p = $(this).parent();
      removeTodosStorage_today(p);
      p.fadeOut(function(){
        p.remove();
      });

    });
    task.append(del_icon,check_icon);
    $(".hold-job1").append(task);
    $("#txt1").val("");
  }
});
$("#txt2").on("keyup",function(e) {
  if (e.keyCode == 13 & $("#txt2").val() != ""){
    let task = $("<div class='task1'></div>").text($("#txt2").val());
    let todo = $("#txt2").val();
    saveLocalStorage_workinprogress(todo);
    let check_icon = $("<i class='fa fa-check'></i>").click(function(){
      let f = $(this).parent();
      f.css("textDecoration","line-through");
     });
    let del_icon = $("<i i class='fa fa-trash-o'></i>").click(function(){
      let p = $(this).parent();
      removeTodosStorage_workinprogress(p);
      p.fadeOut(function(){$("#txt1").val("");
        p.remove();
      });
    });
    task.append(del_icon,check_icon);
    $(".hold-job2").append(task);
    $("#txt2").val("");
  }
});
$("#txt3").on("keyup",function(e) {
  if (e.keyCode == 13 & $("#txt3").val() != ""){
    let task = $("<div class='task1'></div>").text($("#txt3").val());
    let todo = $("#txt3").val();
    saveLocalStorage_rememberday(todo);
    let check_icon = $("<i class='fa fa-check'></i>").click(function(){
      let f = $(this).parent();
      f.css("textDecoration","line-through");
     });
    let del_icon = $("<i i class='fa fa-trash-o'></i>").click(function(){
      let p = $(this).parent();
      removeTodosStorage_rememberday(p);
      p.fadeOut(function(){
        p.remove();
      });
    });
    task.append(del_icon,check_icon);
    $(".hold-job3").append(task);
    $("#txt3").val("");
  }
});
function getTodoBackPage() {
  let todos_today;
  let workInProgress;
  let rememberDay;
  if (localStorage.getItem("todos_today")===null){
    todos_today = [];
  } else {
    todos_today = JSON.parse(localStorage.getItem("todos_today"));
  }
  if (localStorage.getItem("workInProgress")===null){
    workInProgress = [];
  } else {
    workInProgress = JSON.parse(localStorage.getItem("workInProgress"));
  }
  if (localStorage.getItem("rememberDay")===null){
    rememberDay = [];
  } else {
    rememberDay = JSON.parse(localStorage.getItem("rememberDay"));
  }
  todos_today.forEach(function(todo){
    let task = $("<div class='task1'></div>").text(todo);
    let check_icon = $("<i class='fa fa-check'></i>").click(function(){
      let f = $(this).parent();
      f.css("textDecoration","line-through");
     });
    let del_icon = $("<i i class='fa fa-trash-o'></i>").click(function(){
      let p = $(this).parent();
      removeTodosStorage_today(p);
      p.fadeOut(function(){
        p.remove();
      });
    });
    task.append(del_icon,check_icon);
    $(".hold-job1").append(task);
  });
  workInProgress.forEach(function(todo){
    let task = $("<div class='task1'></div>").text(todo);
    let check_icon = $("<i class='fa fa-check'></i>").click(function(){
      let f = $(this).parent();
      f.css("textDecoration","line-through");
     });
    let del_icon = $("<i i class='fa fa-trash-o'></i>").click(function(){
      let p = $(this).parent();
      removeTodosStorage_workinprogress(p);
      p.fadeOut(function(){$("#txt1").val("");
        p.remove();
      });
    });
    task.append(del_icon,check_icon);
    $(".hold-job2").append(task);
    $("#txt2").val("");
  });
  rememberDay.forEach(function(todo){
    let task = $("<div class='task1'></div>").text(todo);
    let check_icon = $("<i class='fa fa-check'></i>").click(function(){
      let f = $(this).parent();
      f.css("textDecoration","line-through");
     });
    let del_icon = $("<i i class='fa fa-trash-o'></i>").click(function(){
      let p = $(this).parent();
      removeTodosStorage_rememberday(p);
      p.fadeOut(function(){
        p.remove();
      });
    });
    task.append(del_icon,check_icon);
    $(".hold-job3").append(task);
    $("#txt3").val("");
  })
}
function saveLocalStorage_today(todo) {
    let todos_today;
    if (localStorage.getItem("todos_today")===null){
      todos_today = [];
    } else {
      todos_today = JSON.parse(localStorage.getItem("todos_today"));
    }
    todos_today.push(todo);
    localStorage.setItem("todos_today",JSON.stringify(todos_today));
}
function removeTodosStorage_today(p) {
  let todos_today;
  if (localStorage.getItem("todos_today")===null){
    todos_today = [];
  } else {
    todos_today = JSON.parse(localStorage.getItem("todos_today"));
  }
  text = p.text();
  todos_today.splice(todos_today.indexOf(text),1);
  localStorage.setItem("todos_today",JSON.stringify(todos_today));
}
function saveLocalStorage_workinprogress(todo) {
    let workInProgress;
    if (localStorage.getItem("workInProgress")===null){
      workInProgress = [];
    } else {
      workInProgress = JSON.parse(localStorage.getItem("workInProgress"));
    }
    workInProgress.push(todo);
    localStorage.setItem("workInProgress",JSON.stringify(workInProgress));
}
function removeTodosStorage_workinprogress(p) {
  let workInProgress;
  if (localStorage.getItem("workInProgress")===null){
    workInProgress = [];
  } else {
    workInProgress = JSON.parse(localStorage.getItem("workInProgress"));
  }
  text = p.text();
  workInProgress.splice(workInProgress.indexOf(text),1);
  localStorage.setItem("workInProgress",JSON.stringify(workInProgress));
}
function saveLocalStorage_rememberday(todo) {
    let rememberDay;
    if (localStorage.getItem("rememberDay")===null){
      rememberDay = [];
    } else {
      rememberDay = JSON.parse(localStorage.getItem("rememberDay"));
    }
    rememberDay.push(todo);
    localStorage.setItem("rememberDay",JSON.stringify(rememberDay));
}
function removeTodosStorage_rememberday(p) {
  let rememberDay;
  if (localStorage.getItem("rememberDay")===null){
    rememberDay = [];
  } else {
    rememberDay = JSON.parse(localStorage.getItem("rememberDay"));
  }
  text = p.text();
  rememberDay.splice(rememberDay.indexOf(text),1);
  localStorage.setItem("rememberDay",JSON.stringify(rememberDay));
}
var arrBang=[];
arrNames.forEach(function(name) {
  if (name === "Bang") {
    arrBang.push(name);
  }
});
