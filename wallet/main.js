function myFunction (new_balance) {
  var bal = new_balance;
  return bal;
}
document.getElementById ('wallet-main').addEventListener ('submit', submitForm);

function submitForm (e) {
  e.preventDefault ();

  // Get values
  var add_amount = getInputVal ('add_amount');
  var balance = document.querySelector ('.balance').textContent;
  var balance_new = +balance;
  var amount_new = +add_amount;
  var new_balance = amount_new + balance_new;

  document.getElementById ('balance').innerHTML = new_balance;

  document.getElementById ('wallet-main').reset ();
}

function getInputVal (id) {
  return document.getElementById (id).value;
}
