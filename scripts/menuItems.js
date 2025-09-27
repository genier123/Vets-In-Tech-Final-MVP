// Define the menu data structure as an array of objects
const menuItems = [
    { text: 'Home', href: './index.html' },
    { text: 'Celebrities', href: './celebrities.html' },
    { text: 'DJ & Producer', href: './djsandproducers.html' },
    { text: 'Lifestyle', href: './lifestyle.html' },
    { text: 'Lyrics', href: './lyrics.html' },
    { text: 'News Archives', href: './archives.html' }
];

// Get the menu container element from the HTML
const menuContainer = document.getElementById('buttonMenu');

// Loop through the menu items and create and append button tags
menuItems.forEach(item => {
  const button = document.createElement('button');

  // Set the button's text
  button.textContent = item.text;

  // Replicate the onclick behavior using an event listener
  button.addEventListener('click', () => {
    location.href = item.href;
  });

  // Append the new button to the menu container
  menuContainer.appendChild(button);
});
