const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const inputModalElement = document.querySelector('#inputModal');
const studentNumberElement = document.querySelector('span.studentNo');
const studentEmailElement = document.querySelector('span.email');

const setUserName = (name) => {
    nameH1Element.textContent = name;
    connectNameElement.textContent = name;
}

const setUserNumber = (number) => {
    studentNumberElement.textContent = number;
}

const setUserEmail = (text) => {
    studentEmailElement.textContent = text;
}


const localName = localStorage.getItem('userName');
if (localName) {
    setUserName(localName);
}

const localNumber = localStorage.getItem('studentNo');
if (localNumber) {
    setUserNumber(localNumber);
}

const localEmail = localStorage.getItem('email');
if (localEmail) {
    setUserEmail(localEmail);
}

console.log(inputModalElement);

nameH1Element.onclick = () => {
    inputModalElement.showModal();
};

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
    const modalFormElement = document.querySelector('.modalForm');
    const formData = new FormData(modalFormElement);

    for (const [key, value] of formData) {
        localStorage.setItem(key, value);
        if (key === 'userName') setUserName(value);
        if (key === 'studentNo') setUserNumber(value);
        if (key === 'email') setUserEmail(value);
    }

    inputModalElement.close();
};

inputModalElement.onclick = (event) => {
    if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};