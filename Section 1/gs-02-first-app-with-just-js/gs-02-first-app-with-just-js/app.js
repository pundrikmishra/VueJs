const buttonEl = document.querySelector('button');
// const buttonEl = document.querySelectorAll('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

// buttonEl[0].addEventListener('click', addGoal);
// buttonEl[1].addEventListener('click', addGoal);
// buttonEl[2].addEventListener('click', addGoal);
buttonEl.addEventListener('click', addGoal);

