// script.js

// Lista const com o caminho das suas imagens
const listaImagens = [
    'images/desenho_laylay (1)', 'images/desenho_laylay (2)', 'images/desenho_laylay (3)', 'images/desenho_laylay (4)', 'images/desenho_laylay (5)', 'images/desenho_laylay (6)', 'images/desenho_laylay (7)', 'images/desenho_laylay (8)', 'images/desenho_laylay (9)', 'images/desenho_laylay (10)', 'images/desenho_laylay (11)', 'images/desenho_laylay (12)', 'images/desenho_laylay (13)', 'images/desenho_laylay (14)', 'images/desenho_laylay (15)', 'images/desenho_laylay (16)', 'images/desenho_laylay (17)', 'images/desenho_laylay (18)', 'images/desenho_laylay (19)', 'images/desenho_laylay (20)', 'images/desenho_laylay (21)', 'images/desenho_laylay (22)', 'images/desenho_laylay (23)', 'images/desenho_laylay (24)', 'images/desenho_laylay (25)', 'images/desenho_laylay (26)', 'images/desenho_laylay (27)', 'images/desenho_laylay (28)', 'images/desenho_laylay (29)', 'images/desenho_laylay (30)', 'images/desenho_laylay (31)', 'images/desenho_laylay (32)', 'images/desenho_laylay (33)', 'images/desenho_laylay (34)', 'images/desenho_laylay (35)', 'images/desenho_laylay (36)', 'images/desenho_laylay (37)', 'images/desenho_laylay (38)', 'images/desenho_laylay (39)', 'images/desenho_laylay (40)', 'images/desenho_laylay (41)', 'images/desenho_laylay (42)', 'images/desenho_laylay (43)', 'images/desenho_laylay (44)', 'images/desenho_laylay (45)', 'images/desenho_laylay (46)', 'images/desenho_laylay (47)', 'images/desenho_laylay (48)', 'images/desenho_laylay (49)', 'images/desenho_laylay (50)', 'images/desenho_laylay (51)', 'images/desenho_laylay (52)', 'images/desenho_laylay (53)', 'images/desenho_laylay (54)', 'images/desenho_laylay (55)', 'images/desenho_laylay (56)', 'images/desenho_laylay (57)', 'images/desenho_laylay (58)', 'images/desenho_laylay (59)', 'images/desenho_laylay (60)', 'images/desenho_laylay (61)', 'images/desenho_laylay (62)', 'images/desenho_laylay (63)', 'images/desenho_laylay (64)', 'images/desenho_laylay (65)', 'images/desenho_laylay (66)', 'images/desenho_laylay (67)', 'images/desenho_laylay (68)', 'images/desenho_laylay (69)', 'images/desenho_laylay (70)', 'images/desenho_laylay (71)', 'images/desenho_laylay (72)', 'images/desenho_laylay (73)', 'images/desenho_laylay (74)', 'images/desenho_laylay (75)'
];

function trocarImagens() {
    const imgEsq = document.getElementById('cardapio');
    const imgDir = document.getElementById('img-direita');

    if (imgEsq && imgDir) {
        // Sorteia índices aleatórios
        const randomEsq = Math.floor(Math.random() * listaImagens.length);
        const randomDir = Math.floor(Math.random() * listaImagens.length);

        // Define o src das imagens
        imgEsq.src = listaImagens[randomEsq] + ".jpg";
        imgDir.src = listaImagens[randomDir] + ".jpg";
    }
}

// Executa ao carregar a página
window.onload = trocarImagens;

// Troca a cada 3 segundos
setInterval(trocarImagens, 3000);