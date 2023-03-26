const header = document.getElementsByClassName('header')[0]
console.log(header)
const buttonBar = document.getElementsByClassName('i1')[0]
const buttonClose = document.getElementsByClassName('i2')[0]

buttonBar.addEventListener('click', function () {
	header.classList.add('nav-open')
})
buttonClose.addEventListener('click', function () {
	header.classList.remove('nav-open')
})
