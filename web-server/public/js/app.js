console.log('I am loaded as JS');

    const weatherForm = document.querySelector('form');
    const searchValue = document.querySelector('input');
    const messageOne = document.querySelector('#message-1');
    const messageTwo = document.querySelector('#message-2');
   
    weatherForm.addEventListener('submit', (e) => {
        let search = searchValue.value;
        messageOne.textContent = 'loading';
        messageTwo.textContent = '';
       
        e.preventDefault();     

        
        fetch(`http://localhost:3000/weather?address=${search}`)
        .then(res =>  res.json().then( data => {
            messageOne.textContent = data.foreCastData;
            messageTwo.textContent = data.currentWeather;
        }
        ))
        .catch(err => {
            messageOne.textContent = err;
        });
    })