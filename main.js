
const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;
var rainbowSelected = false;
var enableDraw = false;
var showGrid = true;
var current_size = DEFAULT_SIZE;
var current_color = DEFAULT_COLOR;

// converts rgb to hexidecimal 
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex }).join('');


function draw_grid(size) {
    let grid_container = document.querySelector('#grid-container');
    let cells = document.querySelectorAll('#grid-cell');
    cells.forEach((div) => div.remove());   //Handles the case if cells existed(ie. changing size after drawing)
    grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // For each cell in the set size create a cell dive and set its style/listeners
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

        grid_container.insertAdjacentElement('beforeend', cell);    //appends cell to grid container
    };
}

//Draw initial grid at load time.
draw_grid(DEFAULT_SIZE);

function download_image() {
    let drawingArea = document.querySelector('#grid-container');
    //use html2canvas
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });
    const imgData = drawingArea.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = imgData;
    a.download = 'etch-a-sketch.png';
    a.click();
}

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
        current_color = random_color();
    }
    else {    
        current_color = new_color;
    }
    document.getElementById('color-picker').value = `${current_color}`;
}

function random_color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return rgbToHex(r,g,b);
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