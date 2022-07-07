const password = document.querySelector('.password')
const hiddenBtn = document.querySelector('.hidden-btn')

hiddenBtn.onclick = () => {
    if(password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}