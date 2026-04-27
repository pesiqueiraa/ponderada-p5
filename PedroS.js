let cores = ['#1982A4', // cor que comeca

    '#0000FF', // Azul
    '#FFFFFF', // Branco
    '#00FFFF', // Ciano
    '#FFD700', // Dourado
    '#008000', // Esmeralda
    '#FFA500', // Laranja
    '#800000', // Marrom
    '#000080', // Azul Marinho
    '#FF0000', // Vermelho 
    '#008080', // Turquesa 
    '#800080', // Uva
    '#EE82EE', // Violeta
    '#FFFFFF', // White
];
let indiceCor = 0;
let colunas = 8;
let linhas = 8;
let tam = 60;

let ativo = false;

function setup() {
    createCanvas(500, 500);
}

function draw() {

    let centroX = (width - (colunas * tam * 2)) / 2;
    let centroY = (height - (linhas * tam)) / 2;

    for (let i = 0; i < colunas; i++) {
        for (let j = 0; j < linhas; j++) {

            let x = i * tam * 2;
            let y = j * tam;

            if (j % 2 == 1) {
                x += tam;
            }

            drawCube(x + centroX, y + centroY);
        }
    }
}

function drawCube(x, y) {
    let h = tam / 2;

    fill(255);
    quad(x, y, x + tam, y - h, x + 2 * tam, y, x + tam, y + h);

    fill(0);
    quad(x, y, x + tam, y + h, x + tam, y + tam, x, y + h);

    fill(cores[indiceCor]);
    quad(x + tam, y + h, x + 2 * tam, y, x + 2 * tam, y + h, x + tam, y + tam);
}

function mousePressed() {
    indiceCor++;

    // volta pro começo quando chegar no final
    if (indiceCor >= cores.length) {
        indiceCor = 0;
    }
}