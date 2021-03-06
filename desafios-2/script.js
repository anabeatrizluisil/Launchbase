const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const blogId = card.getAttribute('id')

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${blogId}`

        if (modal.classList.contains('maximize')) {
            modal.classList.remove('maximize')
        } 
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})


modalOverlay.querySelector('.maximize-modal').addEventListener('click', function() {
    modal.classList.add('maximize')
})


