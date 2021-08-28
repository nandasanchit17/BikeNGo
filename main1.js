document.getElementById ('rides').addEventListener ('submit', submitForm);
// Submit form
function submitForm (e) {
  e.preventDefault ();

  // Get values
  var origin = getInputVal ('origin');
  var destination = getInputVal ('destination');

  if (origin == 'cos' && destination == 'gblock') {
    window.location.href = '../cos-g';
  }
  if (origin == 'cos' && destination == 'adminblock') {
    window.location.href = '../cos-ab';
  }
  if (origin == 'cos' && destination == 'nlib') {
    window.location.href = '../cos-nl';
  }
  if (origin == 'gblock' && destination == 'cos') {
    window.location.href = '../g-cos';
  }
  if (origin == 'gblock' && destination == 'adminblock') {
    window.location.href = '../g-ab';
  }
  if (origin == 'gblock' && destination == 'nlib') {
    window.location.href = '../g-nl';
  }
  if (origin == 'adminblock' && destination == 'cos') {
    window.location.href = '../ab-cos';
  }
  if (origin == 'adminblock' && destination == 'nlib') {
    window.location.href = '../ab-nl';
  }
  if (origin == 'adminblock' && destination == 'gblock') {
    window.location.href = '../ab-g';
  }
  if (origin == 'nlib' && destination == 'gblock') {
    window.location.href = '../nl-g';
  }
  if (origin == 'nlib' && destination == 'adminblock') {
    window.location.href = '../nl-ab';
  }
  if (origin == 'nlib' && destination == 'cos') {
    window.location.href = '../nl-cos';
  }
  if (origin == destination) {
    document.querySelector ('.alert1').style.display = 'block';
  }
}
function getInputVal (id) {
  return document.getElementById (id).value;
}
