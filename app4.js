document.getElementById('reset').addEventListener('click', clearFeild);
const button1 = document.getElementById('submit');
const button2 = document.getElementById('convertk');
const select = document.querySelector('.select');
const select2 = document.querySelector('.select2');
var deg;
var degg;
select.addEventListener('input', function(e){
  deg = e.target.value;

  
})
select2.addEventListener('input', function(e){
  degg = e.target.value;

  
})

button1.addEventListener('click', function(){
  if(document.querySelector('.input').value === '') {
    showMessage('please enter a valid tempratue', 'error');
  } else if(deg === 'Celcius' && degg === '5') {
    const celcius = parseFloat(document.querySelector('.input').value);
    const farehint = ((celcius * (9 / 5)) + 32).toFixed(2);
  
    //append to output
    const result = document.getElementById('result');

    
    
    result.value = `${farehint} F`;
    showMessage('Tempratue Calculated', 'success');
    button1.disabled = true;

  } else if (deg === 'Celcius' && degg === '6'){
    const celcius = parseFloat(document.querySelector('.input').value);
    const kelvin = (celcius  + 273.5).toFixed(2);
  
    //append to output
    const result = document.getElementById('result');

    
    
    result.value = `${kelvin} K`;
    showMessage('Tempratue Calculated', 'success');
    button1.disabled = true;
  } else if(deg === 'Faraheint' && degg === '4') {
 
    const faraheint = parseFloat(document.querySelector('.input').value);
    const celcius = ((faraheint - 32) * (5 / 9)).toFixed(2);
    const result = document.getElementById('result');

    
    
    result.value = `${celcius} C`;
    showMessage('Tempratue Calculated', 'success');
    button1.disabled = true;
  } else if(deg === 'Faraheint' && degg === '6'){
    const faraheint = parseFloat(document.querySelector('.input').value);
    const kel = ((faraheint - 32) * (5 / 9) + 273.15).toFixed(2);
    const result = document.getElementById('result');

    
    
    result.value = `${kel} K`;
    showMessage('Tempratue Calculated', 'success');
    button1.disabled = true;
  }  else if(deg === 'kelvin' && degg === '4'){
   
    const kels = parseFloat(document.querySelector('.input').value);
    const fara = (kels -273.15).toFixed(2);
    const result = document.getElementById('result');

    
    
    result.value = `${fara} C`;
    showMessage('Tempratue Calculated', 'success');
    button1.disabled = true;
  } else if(deg === 'kelvin' && degg === '5') {
  
    const kells = parseFloat(document.querySelector('.input').value);
    const faras = ((kells - 273.15) * (9 / 5) + 32).toFixed(2);
    const result = document.getElementById('result');

    
    
    result.value = `${faras} F`;
    showMessage('Tempratue Calculated', 'success');
    button1.disabled = true;
  } else if (deg === 'Celcius' && degg === '4') {
    showMessage('Cant convert to degree of same type', 'error');
  } else if(deg === 'Faraheint' && degg === '5') {
    showMessage('Cant convert to degree of same type', 'error');
  } else if(deg === 'kelvin' && degg === '6'){
    showMessage('Cant convert to degree of same type', 'error');
  } else if(deg === 'select' || degg === 'select2' || deg === undefined || degg === undefined) {
    showMessage('please select the option you want to convert to or from', 'error');
  }
  
})


function showMessage(msg, className) {
  const error = document.createElement('div');
  
  error.className = `alert ${className}`;

  error.textContent = msg;

  const container =  document.querySelector('.container');
  const card = document.querySelector('.card');

  container.insertBefore(error, card);

  setTimeout(removeMessage, 1200);
}
function removeMessage () {
  document.querySelector('.alert').remove();
}

function clearFeild() {
  if(document.querySelector('.input').value === '') {
    showMessage('No Data in Input Fields', 'error');
  } else {
    const input = document.querySelector('.input');
    const resultt = document.getElementById('result');
  
    input.value = '';
    resultt.value = '';
    button1.disabled = false;
    
   
    showMessage('Data Cleared', 'success');
  }
  location.reload()
 
}





