function login() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userName = document.querySelector("input[name='userName']").value;
    const password = document.querySelector("input[name='password']").value;
    const user = users.find(item => item.userName === userName && password === item.password);
    if (user) {
        alert("Bạn đã đăng nhập thành công!");
        location.href = 'file:///D:/Aptech/js4/home.html';

    } else {
        alert('tài khoản và mật khẩu không chính xác');
    }
}
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    login();
})