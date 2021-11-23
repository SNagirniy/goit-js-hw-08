import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea')
const DATA_KEY = "feedback-form-state";


    

    
formEl.addEventListener('input', throttle(setFormData, 500));
formEl.addEventListener('submit', handlerFormSubmit);

 getFormData();


 
function setFormData(event) {
    const formData = {...JSON.parse(localStorage.getItem(DATA_KEY))};
   formData[event.target.name] = event.target.value;

    const udateStorage = JSON.stringify(formData);
    localStorage.setItem(DATA_KEY, udateStorage);
};



function getFormData() {
    const storageData = localStorage.getItem(DATA_KEY);
    if (storageData) {
        const savedData = JSON.parse(storageData);
        
        email.value = savedData.email || '';
        message.value = savedData.message || '';
    }
};


function handlerFormSubmit(event) {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(DATA_KEY)));
    formEl.reset();
    localStorage.removeItem(DATA_KEY);
    
};
