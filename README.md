# Public_API

This is a simple public API that returns email, current datetime, and GitHub repo link.

## API Endpoint
- **Base URL:** 
- **Method:** GET

### Response Format (200 OK)

```sh
json
{
    "email": "your-email@example.com",
   "current_datetime": "2025-01-30T09:30:00Z",
   "github_url": "https://github.com/yourusername/your-repo"
}
```

### Setup Instructions

1. **Clone the repo:**
```sh

git clone https://github.com/yourusername/your-repo.git
```

2. **Install dependencies:**
```sh
npm install
```

3. **Start the server:**
```sh

node index.js
```

4. **Open http://localhost:4000/api/info in a browser or use Postman**

https://hng.tech/hire/nodejs-developers
