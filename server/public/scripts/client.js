$( document ).ready( function(){
  console.log( 'jQuery ready' );
  // click listeners:
  setupClickListeners();
  // get current tasks from server:
  getTasks();
}); // end doc ready

//Click listeners 
function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'you clicked the add button' );
  }); 


}


function getTasks(){
  console.log( 'getting tasks: ajax' );
  // ajax call to server to get tasks
    $.ajax({
      type: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log(response);
    //   render(response);
    }).catch(function(err){
      console.log('error in GET', err);
    });
  
} 

function render()