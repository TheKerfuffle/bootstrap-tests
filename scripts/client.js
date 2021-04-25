console.log('Hello Paxos');

// Create a global array of shows & stuff...
// Next week, this will live on our server
const array = [
  {name: 'Fred', owner: 'Mary'}, 
  {name: 'Kyo', owner: 'Mary'},
  {name: 'Abby', owner: 'Mary'},
  {name: 'Commander Wisdom', owner: 'Dev'}
];

$(document).ready( onReady );

// This is called when the DOM is ready (DOM ready is an event!)
function onReady() {
  console.log( 'Hello from jQuery' );

  // Setup event handler for Add button click
  $( '#btn-add' ).on( 'click', handleAddClick );

  // Display existing pets 
  render(array);
}

// This is called when the Add button is clicked
function handleAddClick( event ) {
  console.log( 'Add button was clicked with the event:', event );

  event.preventDefault();

  //get inputs & call addPet
  let name = $('#in-pet').val();
  let owner = $('#in-owner').val();
  addPet( name, owner);
}

function addPet( name, owner ) {
  let object = { name, owner };
  array.push(object);

  // Clear input fields
  $('#in-pet').val('');
  $('#in-owner').val('');

  // Display them
  render(array)
}

// This will loop through the array and render (display on the DOM)
// all of the pets and their owner
function render( petLists ) {
  // This empties or clears all the children from the div
  $('#out-pets').empty();
  for ( let pet of petLists ) {
    let p = `<tr>
                <td>${pet.name}</td>
                <td>${pet.owner}</td>
             </tr>`;
    $('#out-pets').append(p);
  }
}
