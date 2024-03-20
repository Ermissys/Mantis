const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
const body = document.querySelector('body');
const html = document.querySelector('html');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Adicionar ou remover a classe no body e html para bloquear ou permitir o scroll
    if (navList.classList.contains('active')) {
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
        html.style.overflow = '';
    }
});

// Adicionar event listener para os itens da lista de navegação
const navItems = document.querySelectorAll('.nav-list li a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remover a classe 'active' ao clicar em um item da lista
        navList.classList.remove('active');
        body.style.overflow = ''; // Remover a propriedade de overflow do body
        html.style.overflow = ''; // Remover a propriedade de overflow do html
    });
});
