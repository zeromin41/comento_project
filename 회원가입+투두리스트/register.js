const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorText = document.getElementById('error');

let users = [];

function checkDuplicate() {
  const username = usernameInput.value.trim();
  if (users.includes(username)) {
    errorText.textContent = '이미 존재하는 아이디입니다.';
  } else {
    errorText.textContent = '';
  }
}

function register() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    errorText.textContent = '아이디와 비밀번호를 모두 입력하세요.';
    return;
  }

  if (users.includes(username)) {
    errorText.textContent = '이미 존재하는 아이디입니다.';
    return;
  }

  if (!isValidPassword(password)) {
    errorText.textContent = '비밀번호는 영문자와 숫자가 섞여있고 8자 이상이어야 합니다.';
    return;
  }

  // 회원가입 성공
  users.push(username);
  alert('회원가입이 완료되었습니다.');
}

function isValidPassword(password) {
  // 비밀번호는 영문자와 숫자가 섞여있고 8자 이상이어야 합니다.
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}
