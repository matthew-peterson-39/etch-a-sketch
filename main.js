const grid_div = document.querySelector('#grid');

// Create 16 x 16 grid to draw on
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  grid_div.appendChild(div);
}

