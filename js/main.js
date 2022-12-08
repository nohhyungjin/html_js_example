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

const IsValidateName = (str) => {
    return /^[a-zA-Zㄱ-힣0-9-_.]{2,12}$/.test(str)
  }

const IsValidateNum = (str) => {
    return /^[0-9]*$/.test(str)
}

const IsValidateEmail = (email) => {
    return /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/.test(email)
}
  
  

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
    const modalFormElement = document.querySelector('.modalForm');
    const formData = new FormData(modalFormElement);

    

    for (const [key, value] of formData) {
        localStorage.setItem(key, value);
        if (key === 'userName') {
            if(IsValidateName(value)) {
                setUserName(value);
            } else {
                setUserName('잘못된 입력값');
            }
        }
        if (key === 'studentNo') {
            if(IsValidateNum(value)) {
                setUserNumber(value);
            } else {
                setUserNumber('잘못된 입력값');
            }
        }
        if (key === 'email') {
            if(IsValidateEmail(value)) {
                setUserEmail(value);
            } else {
                setUserEmail('잘못된 입력값');
            }
        }
    }

    inputModalElement.close();
};

inputModalElement.onclick = (event) => {
    if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};