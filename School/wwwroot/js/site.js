window.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('dynamic-content');

    if (!content) {
        console.error('Elemento #dynamic-content não encontrado!');
        return;
    }

    // Função mágica pra carregar as views parciais
    function loadView(viewName) {
        fetch(`/Home/LoadView?viewName=${viewName}`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => {
                if (!response.ok) throw new Error(`Erro: ${response.status}`);
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;

                // Atualiza qual botão tá ativo
                document.querySelectorAll('.nav-link[data-content]').forEach(link => {
                    link.classList.remove('active');
                });

                const current = document.querySelector(`.nav-link[data-content="${viewName}"]`);
                if (current) current.classList.add('active');
            })
            .catch(error => {
                console.error('Erro ao carregar a view:', error);
                content.innerHTML = `
                    <div class="alert alert-danger">
                        Ocorreu um erro ao carregar o conteúdo. 😢<br>
                        <small>${error.message}</small>
                    </div>
                `;
            });
    }

    // Escuta clicks nos botões com data-content
    document.body.addEventListener('click', e => {
        const link = e.target.closest('.nav-link[data-content]');
        if (!link) return;

        e.preventDefault();

        const viewName = link.getAttribute('data-content');
        if (viewName) {
            loadView(viewName);
        }
    });

    // Carrega a view inicial (dashboard)
    loadView('dashboard');
});
