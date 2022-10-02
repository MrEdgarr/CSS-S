function Register() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const fullName = document.querySelector("input[name='fullName']").value;
    const address = document.querySelector("input[name='address']").value;
    const userName = document.querySelector("input[name='userName']").value;
    const password = document.querySelector("input[name='password']").value;
    const password1 = document.querySelector("input[name='password1']").value;
    if (password === password1) {
        const user = {
            fullName,
            address,
            userName,
            password,
        }
        const userExit = users.find((item) => {
            return item.userName == user.userName;
        })
        if (!userExit) {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Chúc mừng bạn đã đăng ký thành công');
            location.href = 'file:///D:/Aptech/js4/login.html';
        }
        else {
            alert("Đã tồn tại tài khoản với tên tài khoản là:" + userName);
        }
    } else {
        alert("Mật khẩu nhập lại không đúng");
    }
}
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    Register();
})