const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.btn');
const buttonbtn1 = document.querySelector('.btn1');

button.onclick = () => {
    wrapper.classList.add('active');
}

buttonbtn1.onclick = () => {
    wrapper.classList.add('active1');
}