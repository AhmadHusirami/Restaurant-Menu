document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/menu')
        .then(response => response.json())
        .then(sheetData => {
            displayMenu(sheetData);
        })
        .catch(error => console.error('Error:', error));
});

function displayMenu(sheetData) {
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = ''; // Clear previous menu items

    sheetData.slice(1).forEach(row => { // Skip the header row
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <p><strong>Item: </strong>${row[0]}</p>  <!-- Item Name -->
            <p>${row[1]}</p>  <!-- Description -->
            <p><strong>Price: ${row[2]}</strong></p>  <!-- Price -->
            <p><strong>Category: </strong>${row[3]}</p>  <!-- Description -->
        `;
        menuDiv.appendChild(menuItem); // Add the menu item to the page
    });
}
