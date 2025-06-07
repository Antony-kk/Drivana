Drivana - Car Rental and Taxi Service Website
Overview
Drivana is a responsive web application designed to provide users with fast, reliable car hire and taxi services. The website supports multiple languages (English, French, Swahili, German, Spanish) and offers features such as ride booking, driver applications, and customer reviews. The project uses HTML, Tailwind CSS, and JavaScript to create an interactive user experience.
Features

Multilingual Support: Switch between English, French, Swahili, German, and Spanish.
Ride Options: Choose from Economy Ride ($20/hr), Luxury Ride ($30/hr), Convertible Ride ($80/hr), or Van Ride ($50/hr).
Booking System: Users can book a ride by providing pickup/drop-off locations, date, time, and ride type.
Driver Application: Potential drivers can apply to join Drivana.
Responsive Design: Mobile-friendly layout with a hamburger menu for smaller screens.
Interactive Elements: Smooth scrolling, modals fsor forms, and horizontal scrolling for ride options and testimonials.

Setup Instructions
Prerequisites

A modern web browser (e.g., Chrome, Firefox, Safari).
An internet connection to load external resources like Tailwind CSS and images from Unsplash.
A local development server (optional) to test the website locally (e.g., using VS Code's Live Server extension or python -m http.server).

Installation

Clone or Download the Project:

If using Git, clone the repository:  git clone <repository-url>


Alternatively, download the project files as a ZIP and extract them.


Directory Structure:Ensure the following structure is maintained:
drivana/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md


External Dependencies:

The project uses Tailwind CSS via a CDN. Ensure an internet connection to load it from https://cdn.tailwindcss.com.
Images are sourced from Unsplash URLs in index.html. No local image files are required.


Run the Website:

Open index.html in a web browser directly, or
Use a local server for a better development experience:python -m http.server 8000

Then navigate to http://localhost:8000 in your browser.



File Structure

index.html: The main HTML file containing the structure of the website, including sections for the hero, booking, ride options, about, reviews, contact, and modals.
css/style.css: Custom CSS for styling the website, including the hamburger menu, modals, and horizontal scrolling.
js/script.js: JavaScript for interactivity, including language switching, form handling, smooth scrolling, and modal functionality.
README.md: This file, providing project documentation.

Usage
Language Switching

Use the "Language" dropdown in the navbar to switch between supported languages (English, French, Swahili, German, Spanish).
The selected language is saved in the browser's local storage for persistence across page reloads.

Booking a Ride

Navigate to the "Make Your Trip" section or use the "Book a Ride" modal.
Enter your pickup and drop-off locations, date, time, and select a ride type (Economy, Luxury, Convertible, or Van).
Submit the form to book a ride. A confirmation message will appear.

Ride Options

The "Our Ride Options" section displays available ride types with their prices:
Economy Ride: $20/hr
Luxury Ride: $30/hr
Convertible Ride: $80/hr
Van Ride: $50/hr


Use the left and right arrows to scroll through the options manually.

Become a Driver

Click the "Become a Driver" button in the driver promotion section.
Fill out the form in the modal with your name, email, phone number, and driver’s license number.
Submit the form to apply. A confirmation message will appear.

Contact

Use the "Get in Touch" section to send a message via the contact form.
Alternatively, use the "Talk to Us" button (bottom-right corner) to access quick contact options (WhatsApp, phone, email).

Customization

Styling: Modify css/style.css to adjust the website’s appearance (e.g., colors, fonts, layout).
Translations: Update the translations object in js/script.js to add or modify language translations.
Ride Options: Edit the "Our Ride Options" section in index.html to change ride types, descriptions, or prices.

Notes

The website uses placeholder images from Unsplash. Replace them with actual images in a production environment.
Form submissions currently display a success message but do not send data to a backend. Implement a backend service (e.g., Node.js, Flask) to handle form data for production use.
Ensure accessibility by testing with screen readers and adding ARIA labels where necessary.

License
This project is for personal use and demonstration purposes. All rights reserved by the project owner.

For questions or support, contact:Email: support@drivana.comPhone: +254 723 891674Address: Kasarani Mwiki, Nairobi 00100
