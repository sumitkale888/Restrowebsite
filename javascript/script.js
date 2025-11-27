let sinbtn = document.querySelector('.signinbtn');
let supbtn = document.querySelector('.signupbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let okbtn=document.querySelector('.sbtn');

sinbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'SIGN IN';

    supbtn.classList.add('disable');
    sinbtn.classList.remove('disable');
});

supbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '150px';
    title.innerHTML = 'SIGN UP';

    sinbtn.classList.add('disable');
    supbtn.classList.remove('disable');
});

okbtn.addEventListener('click', () => {
    window.location.href = "../html/index.html";
});