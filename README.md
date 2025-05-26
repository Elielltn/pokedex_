Pokédex Web Application
 
A modern and interactive Pokédex web application built with HTML, CSS, and JavaScript, utilizing the PokéAPI to fetch and display Pokémon data. This project features a responsive grid layout, search functionality, pagination, and detailed Pokémon information pages.
Features

Search Pokémon: Search for Pokémon by name or ID.
Paginated List: Load Pokémon in batches of 12 with a "Load More" button.
Detailed Pokémon Pages: View detailed information including types, height, weight, abilities, and category.
Responsive Design: Optimized for both desktop and mobile devices.
Dynamic Rendering: Fetches data from the PokéAPI and dynamically updates the UI.

Technologies Used

HTML5: Structure of the web pages.
CSS3: Styling with a focus on responsive design (global.css, index.css, pokemon.css).
JavaScript (ES6): Handles API requests, DOM manipulation, and interactivity.
PokéAPI: Provides Pokémon data for the application.

Installation
To run this project locally, follow these steps:

Clone the repository:git clone https://github.com/your-username/your-repo-name.git


Navigate to the project directory:cd your-repo-name


Serve the application:
Use a local server like Live Server in VS Code, or
Run a simple HTTP server using Python:python -m http.server 8000




Open your browser and navigate to http://localhost:8000.

Note: No additional dependencies are required as the project uses vanilla JavaScript and external API calls.
Usage

Home Page (index.html):
View a grid of Pokémon cards, each displaying the Pokémon's ID, name, types, and image.
Use the search bar to find a Pokémon by name or ID.
Click the "Load More" button to fetch additional Pokémon.


Pokémon Details Page (pokemon.html):
Click on a Pokémon card to view detailed information, including height, weight, abilities, category, and types.
Navigate back to the home page using the "Back" button.


Search Functionality:
Enter a Pokémon's name or ID in the search bar and press "Enter" or click the search icon to display the result.
Clear the search input to reset the paginated list.


Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add feature").
Push to the branch (git push origin feature-branch).
Open a Pull Request.

Please ensure your code follows the existing style and includes appropriate comments.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

PokéAPI for providing the Pokémon data.
Icons from Phosphor Icons used in the search button.

Future Improvements

Add loading spinners for better UX during API calls.
Implement filters for Pokémon types or generations.
Enhance accessibility features (ARIA labels, keyboard navigation).
Add unit tests for JavaScript functions.

