//Selector Element
const checkButton = document.querySelector(".fa fa-check");
const trashButton = document.querySelector(".fa fa-trash-o");
// Add addEventListener
trashButton.addEventListener('click',del_task);
// function
$("#txt1").on("keyup",function(e) {
  if (e.keyCode == 13 & $("#txt1").val() != ""){
    let todo = $("#txt1").val();
    let task = $("<div class='task1'></div>").text($("#txt1").val());
    let check_icon = $("<i class='fa fa-check'></i>");
    let del_icon = $("<i i class='fa fa-trash-o'></i>");
    task.append(del_icon,check_icon);
    $(".hold-job1").append(task);
    $("#txt1").val("");
  }
});
$("#txt2").on("keyup",function(e) {
  if (e.keyCode == 13 & $("#txt2").val() != ""){
    let todo = $("#txt2").val();
    let task = $("<div class='task1'></div>").text($("#txt2").val());
    let check_icon = $("<i class='fa fa-check'></i>");
    let del_icon = $("<i i class='fa fa-trash-o'></i>");
    task.append(del_icon,check_icon);
    $(".hold-job2").append(task);
    $("#txt2").val("");
  }
});
$("#txt3").on("keyup",function(e) {
  if (e.keyCode == 13 & $("#txt3").val() != ""){
    let todo = $("#txt3").val();
    let task = $("<div class='task1'></div>").text($("#txt3").val());
    let check_icon = $("<i class='fa fa-check'></i>");
    let del_icon = $("<i i class='fa fa-trash-o'></i>");
    task.append(del_icon,check_icon);
    $(".hold-job3").append(task);
    $("#txt3").val("");
  }
});
function del_task() {
  console.log("hello");
  let parent = trashButton.parentElement();
}
