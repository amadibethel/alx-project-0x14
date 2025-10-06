# CineSeek - Movie Discovery Application

## API Overview

The **MoviesDatabase API** is a comprehensive RESTful service that provides access to a large collection of movie, TV show, and entertainment-related data.  
It allows developers to search for titles, retrieve detailed information about movies, filter by genre or release year, and access metadata such as ratings, cast, crew, and plot summaries.

The API is well-documented, easy to integrate, and ideal for building movie discovery, recommendation, and content-tracking applications.

### Key Features

- Search for movies, TV shows, and people by name or keyword  
- Retrieve detailed metadata for a specific title (including release year, rating, genre, and plot)  
- Filter results by genre, release year, or IMDb rating  
- Access trending or popular titles  
- Pagination support for large datasets  
- Secure API key–based authentication  

---

## API Version

**Version:** `v1`

The MoviesDatabase API currently operates under version **v1**, which provides stable and production-ready endpoints for movie discovery and metadata retrieval.

---

## Available Endpoints

| Endpoint | Description |
|-----------|-------------|
| **GET /titles** | Fetches a list of movie titles with optional filters (e.g., year, genre, sort order, pagination). |
| **GET /titles/{id}** | Retrieves detailed information for a specific movie or TV show by its unique ID. |
| **GET /titles/search/title/{title}** | Searches for movies or shows based on a given title string. |
| **GET /titles/series/{id}/episodes** | Returns all episodes of a given series. |
| **GET /titles/utils/genres** | Lists all available genres for filtering purposes. |
| **GET /titles/random** | Returns a random movie or TV show entry. |
| **GET /titles/year/{year}** | Retrieves movies released in a specified year. |

---

## Request and Response Format

### Example Request

```bash
GET https://moviesdatabase.p.rapidapi.com/titles?year=2023&genre=action&page=1

Headers:

  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

{
  "page": 1,
  "next": "/titles?page=2",
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "The Action Movie" },
      "releaseYear": { "year": 2023 },
      "genres": { "genres": [{ "text": "Action" }] },
      "primaryImage": { "url": "https://image.url/movie.jpg" },
      "ratingsSummary": { "aggregateRating": 7.8 }
    }
  ]
}

## Response Structure

page – Current page number

next – Link to next page (for pagination)

results – Array of movie objects containing id, titleText, releaseYear, genres, and more

## Authentication

Authentication is handled through API Key Headers via RapidAPI.

## Required Headers

X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

My API key must be stored securely — for Next.js projects, it should be kept in the .env.local file as

MOVIES_API_KEY=your_api_key_here

To protect your key from exposure, API calls should be routed through Next.js API routes on the server side.

## Error Handling

Common error responses and their meanings:

Status Code	Meaning	Example Cause

400	Bad Request	Invalid parameters or missing query
401	Unauthorized	Missing or invalid API key
403	Forbidden	API key not allowed or exceeded usage
404	Not Found	Requested resource doesn’t exist
429	Too Many Requests	Rate limit exceeded
500	Internal Server Error	Server-side problem
Handling in Code

Use try/catch blocks when making requests:

try {
  const response = await fetch(apiUrl, { headers });
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  const data = await response.json();
} catch (error) {
  console.error("Failed to fetch movies:", error);
}


Usage Limits and Best Practices
Usage Limits

Rate Limit: Typically 100–500 requests per day (depending on your RapidAPI plan)

Pagination: Use page and limit parameters to manage results

Caching: Cache responses on the client or server to avoid redundant requests

## Best Practices

Always store your API key in environment variables

Use server-side API routes to hide credentials

Implement loading and error states for better UX

Debounce search inputs to minimize unnecessary API calls

Log errors for debugging but never expose sensitive data

Respect API rate limits by batching or delaying requests

Author

Bethel Amadi

Project: alx-project-0x14 — CineSeek Movie Discovery Application
Built with Next.js, TypeScript, and Tailwind CSS