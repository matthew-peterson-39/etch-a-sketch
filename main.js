const grid_div = document.querySelector('#grid');
const clear_btn = document.querySelector('#clear');
var position;
const size = 16;
var rows = 16;
var col = 16;
top_row = [];
bottom_row = [];

for(let i = 1; i <= rows; i++) {
    top_row[i-1] = i;
}
for(let i = 0; i < rows; i++) {
    bottom_row[i] = top_row[i] + 240;
}

//Events

//Sets the initial starting position on the grid when clicked.
grid_div.addEventListener('click', (grid_clicked) => {
    position = grid_clicked.target;
    console.log(position.id);
    //Call start function passing in the starting location
    position.style.backgroundColor = 'black';
    //disable further clicking
    grid_div.style.pointerEvents = 'none';
});

//Keyboard direction input
addEventListener('keypress', (KeyboardEvent) => {
    if (position === undefined) {
        alert("Please choose a starting location by clicking one of the cells.");
        return;
    };
    const key = KeyboardEvent.key.toLowerCase();
    console.log(key);
    color_next(key, position);
});

//Resets board and starting position when 'Clear' button is clicked.
clear_btn.addEventListener('click', () => {
    const div_to_remove = document.querySelectorAll(".cell");
    for (let i = 0; i < (size * size); i++) {
        div_to_remove[i].remove();
    }; 
    position = undefined;
    draw_grid(size);
    grid_div.style.pointerEvents = 'auto';
});

//Functions
// Create 16 x 16 grid to draw on
function draw_grid(size) {
    for (let i = 0; i < (size * size); ++i) {
        const div = document.createElement('div');
        div.className = "cell";
        div.id = i.toString();
        grid_div.appendChild(div);
    };
};

function color_next(key, position) {
    if (key === 'w') {
        let next_cell =  document.getElementById(`${+position.id - 16}`);
        if(next_cell == null) {
            alert("Cant go that way");
        }
        else {
            next_cell.style.backgroundColor = 'black';
            return; 
        };
    };
    if (key === 'a') {
        let next_cell =  document.getElementById(`${+position.id - 1}`);
        if(next_cell == null) {
            alert("Cant go that way");
        }
        else {
            next_cell.style.backgroundColor = 'black';
            return; 
        };
    };
};

//main area
draw_grid(16);