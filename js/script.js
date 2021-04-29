function newItem(){

  //javascript
  //1. Adding a new item to the list of items (only when the input is not blank): 

  if($('#input').val() === ''){
    alert('You must write something!');
  }else{
    let text = $('#input').val();
    let li = $('<li></li>');
    li.text(text);
    $('#list').append(li);   

    //3(i). Adding the delete button "X":
    let deleteBtn = $('<crossOutButton></crossOutButton>');
    deleteBtn.append(document.createTextNode('X'));
    li.append(deleteBtn);

  }

  //2. Crossing out an item from the list of items:
  $('#list li').off().on('dblclick', function(){ //makes sure event is only fired once
    $(this).toggleClass('strike');
  })

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  $('#list li crossOutButton').off().on('click', function(){ //makes sure event is only fired once
    $(this).parent().addClass('delete');   
  });

  // 4. Reordering the items: 
  $('#list').sortable();   

}

