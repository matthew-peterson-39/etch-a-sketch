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
        grid_container.insertAdjacentElement('beforeend', cell);
    };
};

draw_grid(16);

function change_size(input) {
    draw_grid(Math.abs(input));
};