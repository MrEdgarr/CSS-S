
function loadTable() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  let contenTable = ``;
  users.forEach((item, index) => {
    contenTable += `
    <tr>
      <td>${index + 1}</td>
      <td>${item.fullName}</td>
      <td>${item.userName}</td>
      <td>${item.address}</td>
      <td><button onclick="Remove('${item.userName}')">Xóa</button>
      <button onclick="Update('${item.userName}')">Sửa</button>
      </td>
    </tr>`

  });
  document.querySelector('table>tbody').innerHTML = contenTable;
}
loadTable();
function Remove(userName) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const usersLastRemove = users.filter(item => {
    return !(item.userName == userName);
  })
  localStorage.setItem('users', JSON.stringify(usersLastRemove));
  loadTable();
}
function Cancel() {
  document.querySelector('form').style.display = 'none';
}
function Update(userName) {
  document.querySelector('form').style.display = 'block';
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userUpdate = users.find(item => item.userName == userName);
  if (userUpdate) {
    document.querySelector("input[name='fullName']").value = userUpdate.fullName;
    document.querySelector("input[name='address']").value = userUpdate.address;
    document.querySelector("input[name='userName']").value = userUpdate.userName;
    user = userUpdate;
  }
}
function Save() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const index = users.findIndex(item => item.userName == user.userName);
  users[index].fullName = document.querySelector("input[name='fullName']").value;
  users[index].address = document.querySelector("input[name='address']").value;
  localStorage.setItem('users', JSON.stringify(users));
  alert('Sửa thành công');
  document.querySelector('form').style.display = 'none';
}
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  Save();
  loadTable();
})
