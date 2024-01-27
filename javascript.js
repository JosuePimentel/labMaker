document.querySelector(".hamb").addEventListener('click', e => {
    e.target.parentElement.classList.toggle("show")
    document.querySelector(".menuhamb").classList.toggle("show")
})