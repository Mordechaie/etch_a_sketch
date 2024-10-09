let grid = document.getElementById('grid');

// Create a 16 x 16 grid of squares using flexbox
document.addEventListener('DOMContentLoaded', function() {
   for (let i = 0; i < 256; i++) {
       const square = document.createElement('div');
       square.className = 'square';
       grid.appendChild(square);
   }
});

// Create a button
const button = document.createElement('button');
button.textContent = 'New Grid';
const container = document.querySelector('.container');
container.insertBefore(button, container.firstChild);

// Add event listener to button
button.addEventListener('click', function() {
    // Prompt the user for the number of squares per side
    const squaresPerSide = prompt('Enter the number of squares per side:');
    
    if (squaresPerSide > 100) {
        alert('Please enter a number less than or equal to 100');
    } else {
        // Clear the old grid
        grid.innerHTML = '';
        
        // Adjust the grid's CSS to accommodate the new size (optional)
        grid.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
        
        // Create new squares
        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            grid.appendChild(square);
        }
    }
});
