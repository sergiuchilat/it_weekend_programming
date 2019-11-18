$(document).ready(function () {
  
  $('#add-btn').on('click', function () {
    addTodo();
  });
  
  $('.btn-danger').on('click', function () {
    $(this).closest('li').remove();
  });
  
});


function addTodo(){
  const todoText = $('#todo-text').val();
  $('#todo-list').append(`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        ${todoText}
        <button class="btn btn-danger">delete</button>
      </li>
  `);
}


