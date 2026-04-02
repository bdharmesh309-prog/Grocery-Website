
let logBtn = document.getElementById('click');

function loginn(event) {
    if (event) event.preventDefault();

    let username = document.getElementById('name').value.trim();
    let password = document.getElementById('pass').value.trim();

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    if (username === 'admin' && password === '123') {
        window.location.href = 'pro.html';
    } else {
        alert('please enter correct username and password');
    }
}

logBtn.addEventListener('click', loginn);
   