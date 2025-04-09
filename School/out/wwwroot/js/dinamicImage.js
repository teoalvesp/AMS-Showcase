const contentImages = {
    dashboard: '/images/bg-dashboard.png',
    calendario: '/images/bg-calendario.png',
    reunioes: '/images/bg-reunioes.png',
    eventos: '/images/bg-eventos.png'
};

// Define a imagem padrão ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const defaultContent = 'dashboard';
    const defaultBg = contentImages[defaultContent];
    document.getElementById('bg-image').src = defaultBg;
});

// Troca a imagem ao clicar nos links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const content = link.getAttribute('data-content');
        const bg = contentImages[content];
        document.getElementById('bg-image').src = bg;
    });
});
