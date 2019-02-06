const equation = document.querySelector('#equation');
const answer = document.querySelector('#answer');

document.querySelectorAll('#buttons button').forEach((button) => {
  button.addEventListener('click', e => {
    e.preventDefault();

    const clicked = e.target.getAttribute('data-value');
      
    if (clicked === 'clear') {
      equation.innerHTML = 0;
      answer.innerHTML = 0;
      return
    }

    if (clicked == '.') {
      if (equation.innerHTML == 0) {
        equation.innerHTML = '0.';
        return;
      }

      equation.innerHTML += clicked;
      return;
    }

    if (parseInt(equation.innerHTML, 10) === 0) {
      equation.innerHTML = clicked
      return;
    }

    if (clicked === '=') {
      answer.innerHTML = eval(equation.innerHTML);
      return;
    }
    
    equation.innerHTML += clicked;
  }); 
});