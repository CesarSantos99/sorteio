const button = document.querySelector('button')



function generateNumber() {
    const min = Math.ceil(document.querySelector('.first-input').value)
    const max = Math.floor(document.querySelector('.two-input').value)


    if (min >= max) {
        alert('O valor minimo tem que ser Menor que o valor máximo')
    } else {
        const result = Math.floor(Math.random() * (max - min) + min)

    alert(result)
    }
 
}



button.addEventListener('click', generateNumber)


































