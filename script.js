function nextPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.message-container');
    
    // Loop through all pages and hide them
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(`page${pageNumber}`).style.display = 'block';
}

// Function to create flowers
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    // Randomize position and size
    const size = Math.random() * (100 - 30) + 30; // Random size between 30 and 100
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    
    // Position the flower randomly
    flower.style.left = `${Math.random() * (100 - size)}vw`;
    
    // Add animation
    flower.style.animation = `float ${Math.random() * (5 - 3) + 3}s linear forwards`; // Random duration between 3s and 5s
    
    // Append the flower to the container
    document.querySelector('.flower-container').appendChild(flower);
    
    // Remove flower after animation ends
    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

// Create flowers at intervals
setInterval(createFlower, 500); // Create a new flower every half second

// Propose button action
document.getElementById("proposeBtn").addEventListener("click", () => {
   alert("Yay! You accepted my proposal! 🎉");
   // Optionally redirect or show a final message here
});
