const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;
var rainbowSelected = false;
var enableDraw = false;
var showGrid = true;

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('');

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
        cell.style.cursor = 'pointer';
        cell.style.backgroundColor = 'white';
        if(showGrid) {
            cell.style.borderStyle = 'solid';
            cell.style.borderColor = 'black';
            cell.style.borderWidth = '.25px';
        }
        cell.addEventListener('click', () => {
            if(enableDraw) { 
                enableDraw = false;
            }
            else {
                enableDraw = true;
            }
    });
        cell.addEventListener('mouseover', () => {
            if(enableDraw) {
                cell.style.backgroundColor = `${current_color}`
            }});

        grid_container.insertAdjacentElement('beforeend', cell);
    };
};

//Draw initial grid at load time.
draw_grid(DEFAULT_SIZE);

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

function rainbow_select(new_value) {
    rainbowSelected = new_value;
    return;
}

function set_color(new_color) {
    if(rainbowSelected) {
        current_color = random();
    }
    else {    
        current_color = new_color;
    }
    document.getElementById('color-picker').value = `${current_color}`;
}

function random() {
    let r = Math.random() * (256 - 0) + 0;
    let g = Math.random() * (256 - 0) + 0;
    let b = Math.random() * (256 - 0) + 0;
}

function hide_grid_lines() {
    if(showGrid) {
        showGrid = false;
    }
    else {
        showGrid = true;
    }
    draw_grid(current_size);

}

