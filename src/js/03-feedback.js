import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea')
const DATA_KEY = "feedback-form-state";
const formData = {};
    
    
formEl.addEventListener('input', throttle(setFormData, 500));
formEl.addEventListener('submit', handlerFormSubmit);

getFormData();

function setFormData(event) {
    formData[event.target.name] = event.target.value;

    const data = JSON.stringify(formData);
    localStorage.setItem(DATA_KEY, data)
    
};

function getFormData() {
    const storageData = localStorage.getItem(DATA_KEY);
   
    if (storageData) {
    const savedData = JSON.parse(storageData);
   
    email.value = savedData.email;
    message.value = savedData.message;
    }
};


function handlerFormSubmit(event) {
    event.preventDefault();

    console.log(localStorage.getItem(DATA_KEY));
    event.target.reset();
    localStorage.removeItem(DATA_KEY);
    
};




