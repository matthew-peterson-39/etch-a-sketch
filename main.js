
const grid_div = document.querySelector('#grid');
const clear_btn = document.querySelector('#clear');
const size = 16;

clear_btn.addEventListener('click', () => {
    const div_to_remove = document.querySelectorAll(".grid");
    for (let i = 0; i < (size * size); i++) {
        div_to_remove[i].remove();
    };
    draw_grid(size);
    grid_div.style.pointerEvents = 'auto';
});

// Create 16 x 16 grid to draw on
function draw_grid(size) {
    for (let i = 0; i < (size * size); ++i) {
        const div = document.createElement('div');
        div.className = "grid";
        div.id = i.toString();
        grid_div.appendChild(div);
    };
};

grid_div.addEventListener('click', (grid_clicked) => {
    console.log(grid_clicked.target);
    let start_position = grid_clicked.target;
    grid_div.style.pointerEvents = 'none';
    //disable further clicking
    //event listener for keys to navigate the grid
});

draw_grid(16);