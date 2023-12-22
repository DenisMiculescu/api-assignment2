# Assignment 2 - Web API.

Name: Denis Miculescu (20098078)

## API Configuration

The only configuration required is to input the following variables into a `.env` file.
______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=YourMongoURL
TMDB_KEY=YourTMDBKey
SECRET=YourJWTSecret
______________________

## API Design

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/tmdb/upcoming | GET | Gets a list of all upcoming movies
- /api/movies/tmdb/top_rated | GET | Gets a list of top rated movies 
- /api/movies/tmdb/now_showing | GET | Gets a list of all movies in cinema
- /api/users | GET | Gets a list of all users
- /api/users | POST | Creates a new user // This wasn't implemented in the react app but is available in PostMan

## Security and Authentication

I had a lot of difficulty with getting the authentication working and to secure the routes. I have commented out places where this is implemented.

## Integrating with React App

I changed most of the pages to display movies from the API such as the home, upcoming, top rated and in cinemas. Popular actors and credits of movies remained the same. I also included a Login and Sign up page but couldn't get them functioning properly.
