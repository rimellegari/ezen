const toggleButton = document.getElementsByClassName('toggle-button')[0] /*getelementsbyclassName forma uma array e quero o primeiro item*/
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

/* essa função altera uma das classes para adicionar ou remover o termo active no nome da classe. um click cria e outro remove
a classe*/
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

