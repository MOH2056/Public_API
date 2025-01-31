# Public_API

This is a simple public API that returns email, current datetime, and GitHub repo link.

## API Endpoint
- **Endpoint URL:** http://localhost:4000
- **Method:** GET

### Response Format (200 OK)

```sh
json
{
    "email": "email@example.com",
   "current_datetime": "2025-01-30T09:30:00Z",
   "github_url": "https://github.com/username/your-repo"
}
```

### Setup Instructions

1. **Clone the repo:**
```sh

git clone https://github.com/MOH2056/Public_API.git
```

2. **Install dependencies:**
```sh
npm install
```

3. **Start the server:**
```sh

node index.js
```

4. **Open http://localhost:4000 in a browser or use Postman**

https://hng.tech/hire/nodejs-developers
