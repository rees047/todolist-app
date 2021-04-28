function newItem(){

  //javascript
  //1. Adding a new item to the list of items (only when the input is not blank): 

  if($('#input').val() === ''){
    alert('You must write something!');
  }else{
    let text = $('#input').val();
    $('#list').append('<li data-strike="crossOut"> ' + text + '</li>');
  }

  //2. Crossing out an item from the list of items:

}