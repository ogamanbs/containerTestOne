const main = document.querySelector('.main')
const ball = document.querySelector('.ball')
const text = document.querySelector('.text')
const body = document.querySelector('body')

body.addEventListener('mousemove', (pos) => {
    ball.style.left = pos.x + 'px'
    ball.style.top = pos.y + 'px'
})

main.addEventListener('mousein', () => {
    ball.style.height = 10 + 'px'
    ball.style.width = 10 +'px'
})

main.addEventListener('mousemove', () => {
    ball.style.height = 10 + 'px'
    ball.style.width = 10 +'px'
})


text.addEventListener('mousein', () => {
    ball.style.height = 200 + 'px'
    ball.style.width = 200 +'px'
})

text.addEventListener('mousemove', () => {
    ball.style.height = 200 + 'px'
    ball.style.width = 200 +'px'
})
