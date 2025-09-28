# LinkShort - URL Shortener

A modern, full-featured URL shortener built with Node.js, Express, and MongoDB Atlas.

## Features

- 🔗 **URL Shortening** - Create short URLs from long ones
- 📊 **Analytics** - Track clicks and visit history
- 🎨 **Modern UI** - Beautiful, responsive dashboard
- 🌙 **Dark/Light Theme** - Toggle between themes
- 📱 **Mobile Friendly** - Works on all devices
- 🔒 **Secure** - Environment-based configuration

## Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd url-shortner
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy the example environment file and configure your settings:

```bash
cp .env.example .env
```

Edit `.env` with your MongoDB Atlas credentials:

```env
# Database Configuration
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_CLUSTER=your_cluster.mongodb.net
DB_NAME=url-shortner

# Server Configuration
PORT=8001
NODE_ENV=development

# MongoDB Atlas Connection String (Alternative)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### 4. Start the Application
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 5. Access the Application
Open your browser and go to: `http://localhost:8001`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_USERNAME` | MongoDB Atlas username | - |
| `DB_PASSWORD` | MongoDB Atlas password | - |
| `DB_CLUSTER` | MongoDB Atlas cluster URL | - |
| `DB_NAME` | Database name | `url-shortner` |
| `PORT` | Server port | `8001` |
| `NODE_ENV` | Environment mode | `development` |
| `MONGODB_URI` | Complete MongoDB connection string | - |

## API Endpoints

### Create Short URL
```http
POST /url
Content-Type: application/json

{
  "url": "https://example.com/very-long-url"
}
```

### Get All URLs
```http
GET /url
```

### Redirect to Original URL
```http
GET /url/:shortId
```

### Get URL Analytics
```http
GET /url/:shortId/analytics
```

### Delete URL
```http
DELETE /url/:shortId
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome
- **Environment**: dotenv

## Security Features

- Environment variables for sensitive data
- CORS protection
- Input validation
- Error handling

## Development

### Project Structure
```
url-shortner/
├── controllers/     # Route handlers
├── models/         # Database models
├── routes/         # API routes
├── public/         # Static files
├── .env           # Environment variables
├── .env.example   # Environment template
├── connect.js     # Database connection
├── index.js       # Main server file
└── package.json   # Dependencies
```

### Available Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm install` - Install dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
