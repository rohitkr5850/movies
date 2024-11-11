// Sample movies data

fetch({
    "movies": [
      {
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "release_date": "1994-09-23",
        "rating": 9.3,
        "thumbnail_url": "https://example.com/thumbnail1.jpg",
        "director": "Frank Darabont",
        "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "duration": 142,
        "tags": ["inspirational", "prison", "friendship"]
      },
      {
        "title": "The Godfather",
        "genre": "Crime",
        "release_date": "1972-03-24",
        "rating": 9.2,
        "thumbnail_url": "https://example.com/thumbnail2.jpg",
        "director": "Francis Ford Coppola",
        "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
        "duration": 175,
        "tags": ["mafia", "classic", "family"]
      },
      {
        "title": "The Dark Knight",
        "genre": "Action",
        "release_date": "2008-07-18",
        "rating": 9.0,
        "thumbnail_url": "https://example.com/thumbnail3.jpg",
        "director": "Christopher Nolan",
        "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "duration": 152,
        "tags": ["superhero", "dc", "thriller"]
      },
      {
        "title": "Pulp Fiction",
        "genre": "Crime",
        "release_date": "1994-10-14",
        "rating": 8.9,
        "thumbnail_url": "https://example.com/thumbnail4.jpg",
        "director": "Quentin Tarantino",
        "cast": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        "duration": 154,
        "tags": ["non-linear", "cult", "dialogue"]
      },
      {
        "title": "Forrest Gump",
        "genre": "Drama",
        "release_date": "1994-07-06",
        "rating": 8.8,
        "thumbnail_url": "https://example.com/thumbnail5.jpg",
        "director": "Robert Zemeckis",
        "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "duration": 142,
        "tags": ["inspirational", "life journey", "friendship"]
      },
      {
        "title": "Inception",
        "genre": "Sci-Fi",
        "release_date": "2010-07-16",
        "rating": 8.8,
        "thumbnail_url": "https://example.com/thumbnail6.jpg",
        "director": "Christopher Nolan",
        "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        "duration": 148,
        "tags": ["mind-bending", "thriller", "dream"]
      },
      {
        "title": "Fight Club",
        "genre": "Drama",
        "release_date": "1999-10-15",
        "rating": 8.8,
        "thumbnail_url": "https://example.com/thumbnail7.jpg",
        "director": "David Fincher",
        "cast": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        "duration": 139,
        "tags": ["psychological", "cult", "anti-establishment"]
      },
      {
        "title": "The Matrix",
        "genre": "Sci-Fi",
        "release_date": "1999-03-31",
        "rating": 8.7,
        "thumbnail_url": "https://example.com/thumbnail8.jpg",
        "director": "Lana Wachowski, Lilly Wachowski",
        "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "duration": 136,
        "tags": ["simulation", "cyberpunk", "revolution"]
      },
      {
        "title": "Goodfellas",
        "genre": "Crime",
        "release_date": "1990-09-19",
        "rating": 8.7,
        "thumbnail_url": "https://example.com/thumbnail9.jpg",
        "director": "Martin Scorsese",
        "cast": ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        "duration": 146,
        "tags": ["mafia", "based on true story", "violence"]
      },
      {
        "title": "The Lord of the Rings: The Return of the King",
        "genre": "Fantasy",
        "release_date": "2003-12-17",
        "rating": 8.9,
        "thumbnail_url": "https://example.com/thumbnail10.jpg",
        "director": "Peter Jackson",
        "cast": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
        "duration": 201,
        "tags": ["epic", "adventure", "fantasy"]
      },
      {
        "title": "The Lion King",
        "genre": "Animation",
        "release_date": "1994-06-24",
        "rating": 8.5,
        "thumbnail_url": "https://example.com/thumbnail100.jpg",
        "director": "Roger Allers, Rob Minkoff",
        "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        "duration": 88,
        "tags": ["disney", "family", "animated"]
      },
      {
        "title": "Interstellar",
        "genre": "Sci-Fi",
        "release_date": "2014-11-07",
        "rating": 8.6,
        "thumbnail_url": "https://example.com/thumbnail11.jpg",
        "director": "Christopher Nolan",
        "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        "duration": 169,
        "tags": ["space", "time travel", "epic"]
      },
      {
        "title": "Gladiator",
        "genre": "Action",
        "release_date": "2000-05-05",
        "rating": 8.5,
        "thumbnail_url": "https://example.com/thumbnail12.jpg",
        "director": "Ridley Scott",
        "cast": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        "duration": 155,
        "tags": ["ancient rome", "epic", "revenge"]
      },
      {
        "title": "The Prestige",
        "genre": "Drama",
        "release_date": "2006-10-20",
        "rating": 8.5,
        "thumbnail_url": "https://example.com/thumbnail13.jpg",
        "director": "Christopher Nolan",
        "cast": ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
        "duration": 130,
        "tags": ["magic", "rivalry", "mystery"]
      },
      {
        "title": "The Green Mile",
        "genre": "Drama",
        "release_date": "1999-12-10",
        "rating": 8.6,
        "thumbnail_url": "https://example.com/thumbnail14.jpg",
        "director": "Frank Darabont",
        "cast": ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
        "duration": 189,
        "tags": ["prison", "supernatural", "compassion"]
      },
      {
        "title": "Schindler's List",
        "genre": "History",
        "release_date": "1993-12-15",
        "rating": 9.0,
        "thumbnail_url": "https://example.com/thumbnail15.jpg",
        "director": "Steven Spielberg",
        "cast": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        "duration": 195,
        "tags": ["holocaust", "war", "based on true story"]
      },
      {
        "title": "The Silence of the Lambs",
        "genre": "Thriller",
        "release_date": "1991-02-14",
        "rating": 8.6,
        "thumbnail_url": "https://example.com/thumbnail16.jpg",
        "director": "Jonathan Demme",
        "cast": ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
        "duration": 118,
        "tags": ["psychological thriller", "crime", "serial killer"]
      },
      {
        "title": "Saving Private Ryan",
        "genre": "War",
        "release_date": "1998-07-24",
        "rating": 8.6,
        "thumbnail_url": "https://example.com/thumbnail17.jpg",
        "director": "Steven Spielberg",
        "cast": ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
        "duration": 169,
        "tags": ["ww2", "soldiers", "heroism"]
      },
      {
        "title": "The Departed",
        "genre": "Crime",
        "release_date": "2006-10-06",
        "rating": 8.5,
        "thumbnail_url": "https://example.com/thumbnail18.jpg",
        "director": "Martin Scorsese",
        "cast": ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
        "duration": 151,
        "tags": ["mafia", "undercover", "betrayal"]
      },
      {
        "title": "Whiplash",
        "genre": "Drama",
        "release_date": "2014-10-10",
        "rating": 8.5,
        "thumbnail_url": "https://example.com/thumbnail19.jpg",
        "director": "Damien Chazelle",
        "cast": ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
        "duration": 106,
        "tags": ["music", "passion", "mentor"]
      },
      {
        "title": "The Wolf of Wall Street",
        "genre": "Biography",
        "release_date": "2013-12-25",
        "rating": 8.2,
        "thumbnail_url": "https://example.com/thumbnail20.jpg",
        "director": "Martin Scorsese",
        "cast": ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
        "duration": 180,
        "tags": ["finance", "rise and fall", "based on true story"]
      },
      {
        "title": "The Social Network",
        "genre": "Biography",
        "release_date": "2010-10-01",
        "rating": 7.7,
        "thumbnail_url": "https://example.com/thumbnail21.jpg",
        "director": "David Fincher",
        "cast": ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
        "duration": 120,
        "tags": ["technology", "facebook", "entrepreneurship"]
      },
      {
        "title": "Parasite",
        "genre": "Thriller",
        "release_date": "2019-05-30",
        "rating": 8.6,
        "thumbnail_url": "https://example.com/thumbnail22.jpg",
        "director": "Bong Joon Ho",
        "cast": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        "duration": 132,
        "tags": ["social commentary", "class divide", "korean"]
      },
      {
        "title": "Django Unchained",
        "genre": "Western",
        "release_date": "2012-12-25",
        "rating": 8.4,
        "thumbnail_url": "https://example.com/thumbnail23.jpg",
        "director": "Quentin Tarantino",
        "cast": ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
        "duration": 165,
        "tags": ["revenge", "slavery", "action"]
      },
      {
        "title": "Mad Max: Fury Road",
        "genre": "Action",
        "release_date": "2015-05-15",
        "rating": 8.1,
        "thumbnail_url": "https://example.com/thumbnail24.jpg",
        "director": "George Miller",
        "cast": ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        "duration": 120,
        "tags": ["post-apocalyptic", "car chase", "survival"]
      },
      {
        "title": "La La Land",
        "genre": "Musical",
        "release_date": "2016-12-09",
        "rating": 8.0,
        "thumbnail_url": "https://example.com/thumbnail25.jpg",
        "director": "Damien Chazelle",
        "cast": ["Ryan Gosling", "Emma Stone", "John Legend"],
        "duration": 128,
        "tags": ["romance", "music", "hollywood"]
      },
      {
        "title": "Joker",
        "genre": "Crime",
        "release_date": "2019-10-04",
        "rating": 8.4,
        "thumbnail_url": "https://example.com/thumbnail26.jpg",
        "director": "Todd Phillips",
        "cast": ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        "duration": 122,
        "tags": ["psychological", "dark", "dc"]
      },
      {
        "title": "The Grand Budapest Hotel",
        "genre": "Comedy",
        "release_date": "2014-03-28",
        "rating": 8.1,
        "thumbnail_url": "https://example.com/thumbnail27.jpg",
        "director": "Wes Anderson",
        "cast": ["Ralph Fiennes", "Tony Revolori", "Adrien Brody"],
        "duration": 99,
        "tags": ["adventure", "comedy", "stylized"]
      },
      {
        "title": "The Intouchables",
        "genre": "Biography",
        "release_date": "2011-11-02",
        "rating": 8.5,
        "thumbnail_url": "https://example.com/thumbnail28.jpg",
        "director": "Olivier Nakache, Éric Toledano",
        "cast": ["François Cluzet", "Omar Sy", "Anne Le Ny"],
        "duration": 112,
        "tags": ["friendship", "based on true story", "uplifting"]
      },
      {
        "title": "A Beautiful Mind",
        "genre": "Biography",
        "release_date": "2001-12-21",
        "rating": 8.2,
        "thumbnail_url": "https://example.com/thumbnail29.jpg",
        "director": "Ron Howard",
        "cast": ["Russell Crowe", "Ed Harris", "Jennifer Connelly"],
        "duration": 135,
        "tags": ["mathematics", "psychology", "inspiration"]
      },
      {
        "title": "Spirited Away",
        "genre": "Animation",
        "release_date": "2001-07-20",
        "rating": 8.6,
        "thumbnail_url": "https://example.com/thumbnail30.jpg",
        "director": "Hayao Miyazaki",
        "cast": ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
        "duration": 125,
        "tags": ["anime", "fantasy", "adventure"]
      }      
      
    ]
  })  // replace with Firebase fetch if needed
    .then(response => response.json())
    .then(data => {
        movies = data.movies; // adjust according to your db structure
        displayMovies(movies);
    })
    .catch(error => console.error('Error fetching movies:', error));

// Display movies in the grid
function displayMovies(moviesList) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';
    moviesList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>Rating: ${movie.rating}</p>
        `;
        movieCard.onclick = () => showMovieDetails(movie);
        movieGrid.appendChild(movieCard);
    });
}

// Show movie details in modal
function showMovieDetails(movie) {
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalDetails').innerText = `
        Director: ${movie.director}\n
        Cast: ${movie.cast.join(', ')}\n
        Duration: ${movie.duration}\n
        Release Date: ${movie.releaseDate}\n
        Rating: ${movie.rating}\n
        Tags: ${movie.tags.join(', ')}
    `;
    document.getElementById('movieModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}

// Search functionality
document.getElementById('searchBar').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.genre.toLowerCase().includes(searchTerm) ||
        movie.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    displayMovies(filteredMovies);
});

// Sorting functionality
document.getElementById('sortRating').addEventListener('change', function () {
    const order = this.value;
    const sortedMovies = [...movies].sort((a, b) =>
        order === 'asc' ? a.rating - b.rating : b.rating - a.rating
    );
    displayMovies(sortedMovies);
});

// Sorting by release date
document.getElementById('sortDate').addEventListener('change', function () {
    const order = this.value;
    const sortedMovies = [...movies].sort((a, b) =>
        order === 'asc' ? new Date(a.releaseDate) - new Date(b.releaseDate) : new Date(b.releaseDate) - new Date(a.releaseDate)
    );
    displayMovies(sortedMovies);
});


// Array of movie data (for demonstration, only a few movies are shown per page)
const movies = [
    { title: "Movie Title 1", genre: "Action", rating: "8.5", image: "path/to/movie1.jpg" },
    { title: "Movie Title 2", genre: "Drama", rating: "7.2", image: "path/to/movie2.jpg" },
    { title: "Movie Title 3", genre: "Comedy", rating: "6.9", image: "path/to/movie3.jpg" },
    // Add more movie objects as needed for 10 pages worth
];

// Constants
const moviesPerPage = 3;
let currentPage = 1;
const totalPages = Math.ceil(movies.length / moviesPerPage);

// Function to display movies on the current page
function displayMovies(page) {
    const movieGrid = document.getElementById("movieGrid");
    movieGrid.innerHTML = "";

    // Calculate starting and ending indices
    const start = (page - 1) * moviesPerPage;
    const end = start + moviesPerPage;

    // Loop through the selected movies and display them
    for (let i = start; i < end && i < movies.length; i++) {
        const movie = movies[i];
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>Rating: ${movie.rating}</p>
        `;

        movieGrid.appendChild(movieCard);
    }

    // Update page indicator
    document.getElementById("pageIndicator").textContent = `Page ${page} of ${totalPages}`;
}

// Function to handle page changes
function changePage(direction) {
    currentPage += direction;

    // Keep currentPage within valid bounds
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    displayMovies(currentPage);
}

// Initial display of the first page
displayMovies(currentPage);
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Platform</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Search Bar -->
    <header>
        <input type="text" id="searchBar" placeholder="Search by title, genre, or tags">
    </header>

    <!-- Filters Section -->
    <section id="filters">
        <select id="sortRating">
            <option value="">Sort by Rating</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        <select id="sortDate">
            <option value="">Sort by Release Date</option>
            <option value="asc">Oldest First</option>
            <option value="desc">Newest First</option>
        </select>
        <select id="filterGenre">
            <option value="">Filter by Genre</option>
            <!-- Populate dynamically -->
        </select>
    </section>

    <!-- Movies Grid -->
    <main id="movieGrid" class="movie-grid">
        <!-- Movie cards will be loaded here -->
    </main>

    <script src="script.js"></script>
</body>
</html>
// Sample movie data
const movies = [
  { title: "Inception", genre: "action", rating: 8.8, releaseDate: "2010", poster: "inception.jpg" },
  { title: "The Matrix", genre: "action", rating: 8.7, releaseDate: "1999", poster: "matrix.jpg" },
  // Add more movie data here
];

// Display movie cards
function displayMovies(filteredMovies) {
  const movieContainer = document.getElementById("movie-container");
  movieContainer.innerHTML = ""; // Clear previous content

  filteredMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.poster}" class="movie-poster" alt="${movie.title}">
      <div class="movie-info">
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Rating: ⭐${movie.rating}</p>
        <p>Release Date: ${movie.releaseDate}</p>
      </div>
    `;

    // Add click event for showing modal
    card.addEventListener("click", () => showMovieDetails(movie));
    
    movieContainer.appendChild(card);
  });
}

// Show modal with movie details
function showMovieDetails(movie) {
  const modal = document.getElementById("movie-modal");
  document.getElementById("modal-title").innerText = movie.title;
  document.getElementById("modal-description").innerText = Genre: ${movie.genre}\nRating: ${movie.rating}\nRelease Date: ${movie.releaseDate};
  
  modal.style.display = "block";
}

// Close the modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("movie-modal").style.display = "none";
});

// Initialize the page with all movies
displayMovies(movies);

// Search functionality
document.getElementById("search-bar").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm) || 
    movie.genre.toLowerCase().includes(searchTerm)
  );
  displayMovies(filteredMovies);
});

// Sort by rating
document.getElementById("sort-rating").addEventListener("change", function () {
  const sortOrder = this.value;
  const sortedMovies = [...movies].sort((a, b) => {
    return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
  });
  displayMovies(sortedMovies);
});

// Sort by release date
document.getElementById("sort-date").addEventListener("change", function () {
  const sortOrder = this.value;
  const sortedMovies = [...movies].sort((a, b) => {
    return sortOrder === "asc" ? a.releaseDate - b.releaseDate : b.releaseDate - a.releaseDate;
  });
  displayMovies(sortedMovies);
});