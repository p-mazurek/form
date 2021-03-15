import "../scss/main.scss";

console.log('hello :)')

const labels = [...document.querySelectorAll('.form__label')];
const message = document.querySelector('textarea')
const checkClick = (e) => {
    e.preventDefault()
    labels.forEach(label => {
        if (label.classList.contains('active')) {
            label.classList.remove('active')
            message.classList.remove('active')
        } else {
            e.target.closest('label').classList.add('active')
        }
    })

}

for (const label of labels) {
    label.addEventListener('click', checkClick)
}

message.addEventListener('click', () => {
    labels.forEach(label => {
        label.classList.remove('active')
    })
    message.classList.add('active')
})