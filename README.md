# URL Shortener Microservice

A simple URL Shortener Microservice built with Node.js and Express.

## Features

- Shorten valid URLs
- Redirect short URLs to original URLs
- URL validation using DNS lookup
- Simple frontend form interface
- REST API support

---

## Technologies Used

- Node.js
- Express.js
- DNS Core Module

---

## API Endpoints

### Create Short URL

```bash
POST /api/shorturl
```

Request Body:

```x-www-form-urlencoded
url=https://www.google.com
```

Example Response:

```json
{
  "original_url": "https://www.google.com",
  "short_url": 1
}
```

---

### Redirect to Original URL

```bash
GET /api/shorturl/1
```

This will redirect to the original URL.

---

### Invalid URL Example

```json
{
  "error": "invalid url"
}
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mhshanto007/url-shortener-microservice.git
```

Go to the project folder:

```bash
cd url-shortener-microservice
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

---

## Live Demo

https://url-shortener-microservice-d8c3.onrender.com/

---

## Author

GitHub: https://github.com/mhshanto007