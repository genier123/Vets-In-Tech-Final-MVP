// Get the footer container element
const footerContainer = document.getElementById('dynamic-footer');

// Create the HTML content for the footer using a template literal
const footerContent = `
    <a href="mailto:hotclubtracks@gmail.com">Email Us</a> |
    Copyright © 2020-${new Date().getFullYear()} Hot Club Tracks. All rights reserved. |
    <a href="https://www.instagram.com/hotclubtracks/">IG:@hotclubtracks</a> |
    <a href="./privacypolicy.html">Privacy Policy</a> |
    <a href="./aboutus.html">About Us</a>
    <br>
`;

// Insert the HTML content into the footer container
footerContainer.innerHTML = footerContent;
