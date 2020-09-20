const button1 = document.getElementById('submit');
const button2 = document.getElementById('convertk');

$('button').on('click', function() {
const celcius = parseFloat(document.querySelector('.input').value);
const result = document.getElementById('result');
if($(this).text() === 'Convert to Faraheint') {
  if(document.querySelector('.input').value === '') {
    showMessage('please enter a valid tempratue', 'error');
  } else {
    const farehint = ((celcius * (9 / 5)) + 32).toFixed(2);
    results(farehint, 'F')
  }
}
if($(this).text() === 'Convert to Kelvin') {
  if(document.querySelector('.input').value === '') {
    showMessage('please enter a valid tempratue', 'error');
  } else {
    const kelvin = (celcius  + 273.5).toFixed(2);
    results(kelvin, 'K')
  }
}
if($(this).text() === 'Reset') {
  if(document.querySelector('.input').value === '') {
    showMessage('No Data in Input Fields', 'error');
  } else {
    clearFeild()
  }

}

// console.log($(this).text())
})


function showMessage(msg, className) {
  const error = document.createElement('div');
  
  error.className = `alert ${className}`;

  error.textContent = msg;

  const container =  document.querySelector('.container');
  const card = document.querySelector('.card');

  container.insertBefore(error, card);

  setTimeout(removeMessage, 1500);
}
function removeMessage () {
  document.querySelector('.alert').remove();
}

function errorMessage() {
  if(document.querySelector('.input').value === '') {
    showMessage('please enter a valid tempratue', 'error');
  }
}

function results(mode, unit) {
   
  result.value = `${mode} ${unit}`;

  button1.disabled = true;
  button2.disabled = true;

  showMessage('Tempratue Calculated', 'success');
}

function clearFeild() {
  const input = document.querySelector('.input');
  const resultt = document.getElementById('result');

  input.value = '';
  resultt.value = '';
  button1.disabled = false;
  button2.disabled = false;
  showMessage(' Data cleared', 'success');
}