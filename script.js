const button = document.querySelector('button')



function generateNumber() {
    const min = Math.ceil(document.querySelector('.first-input').value)
    const max = Math.floor(document.querySelector('.two-input').value)

    const result = Math.floor(Math.random() * (max - min) + min)

    alert(result)
}



button.addEventListener('click', generateNumber)


































