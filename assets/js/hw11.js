// [숙제11] 동적 웹 페이지 구현
// 2023-16337 이완희

// Q1
const themeBtn = document.querySelector('#theme-btn');
const q1Box = document.querySelector('#q1-box');

themeBtn.addEventListener('click', () => {
    q1Box.classList.toggle('dark');
    if (q1Box.classList.contains('dark')) themeBtn.classList.remove('dark');
    else themeBtn.classList.add('dark');
});

// Q2
const input = document.querySelector('#q2-input');
const count = document.querySelector('#q2-count');
const warn = document.querySelector('#q2-warn');

input.addEventListener('input', (e) => {
    count.textContent = e.target.value.length;
    if (e.target.value.length >= 100) {
        warn.textContent = '100자를 넘었습니다.';
        warn.style.color = 'crimson';
    }
    else warn.textContent = '';
});