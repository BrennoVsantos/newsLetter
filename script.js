const SendBtn = document.querySelector('#submit')
const idemail = document.querySelector('#email')
const invalidTxt = document.querySelector('#invalid')
const wrapper = document.querySelector('.wrapper')
const wrapperTHX = document.querySelector('.wrapper-thx')
const dismissBtn = document.querySelector('#dismiss')
const userMail = document.querySelector('#usermail')
const formulario = document.querySelector('#formulas')


function verificarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        idemail.classList.remove('invalid')
        invalidTxt.style.display = "none"
        userMail.innerText = email
        wrapper.style.display = 'none'
        wrapperTHX.style.display = 'flex' 
    } else {
      idemail.classList.add('invalid')
      invalidTxt.style.display = "block"
    }
}

formulario.addEventListener('submit', (e) => {
    if (!verificarEmail(idemail.value)) {
        e.preventDefault();
    }
});

dismissBtn.addEventListener('click', () => {
    wrapper.style.display = 'flex'
    wrapperTHX.style.display = 'none'
    idemail.value = ''
})


