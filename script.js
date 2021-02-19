const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navList = document.getElementsByClassName('nav-links')[0]
const imageChange = document.getElementById('toggle-button')

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active')
    imageChange.classList.toggle('active')
})