// Define the menu data structure as an array of objects
const menuItems = [
    { text: 'Home', href: 'https://www.hotclubtracks.com/' },
    { text: 'Celebrities', href: 'https://www.hotclubtracks.com/celebrities' },
    { text: 'DJ & Producer', href: 'https://www.hotclubtracks.com/djsandproducers' },
    { text: 'Lifestyle', href: 'https://www.hotclubtracks.com/lifestyle' },
    { text: 'Lyrics', href: 'https://www.hotclubtracks.com/lyrics' },
    { text: 'News', href: 'https://www.hotclubtracks.com/news' },
    { text: 'Archives', href: 'https://www.hotclubtracks.com/archives' }
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
