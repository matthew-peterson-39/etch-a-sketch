const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

var current_size = DEFAULT_SIZE;
var current_color = DEFAULT_COLOR;

function draw_grid(size) {
    let grid_container = document.querySelector('#grid-container');
    let cells = document.querySelectorAll('#grid-cell');
    cells.forEach((div) => div.remove());
    grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
        cell.id = 'grid-cell';
        cell.style.backgroundColor = 'peru';
        cell.addEventListener('mouseover', () => cell.style.backgroundColor = `${current_color}`);
        grid_container.insertAdjacentElement('beforeend', cell);
    };
};

draw_grid(16);

function change_size(input) {
    draw_grid(Math.abs(input));
    set_size(input);
};

function reset_grid() {
    draw_grid(current_size);
    current_color = DEFAULT_COLOR;
}

function set_size(size) {
    current_size = size;
}

function get_current_size() {
    return current_size;
}

function set_color(new_color) {
    current_color = new_color;
    document.getElementById('color-picker').value = `${current_color}`;
}

function random() {
    let r = Math.random() * (256 - 0) + 0;
    let g = Math.random() * (256 - 0) + 0;
    let b = Math.random() * (256 - 0) + 0;
    let hex = rgbToHex(r,g,b);
    return hex;
}
