# LinkShort - URL Shortener
Ek modern aur full-featured URL shortener jo Node.js, Express, aur MongoDB Atlas ke saath banaya gaya hai.

## Features
- URL Shortening - Lambe URLs ko chote mein convert kariye
- Analytics - Clicks aur visit history track kariye
- Modern UI - Beautiful aur responsive dashboard
- Dark/Light Theme - Themes ke beech switch kariye
- Mobile Friendly - Sabhi devices par kaam karta hai
- Secure - Environment-based configuration

## Quick Start

### 1. Repository Clone Kariye
```bash
git clone <repository-url>
cd url-shortner
```

### 2. Dependencies Install Kariye
```bash
npm install
```

### 3. Environment Setup
Example environment file copy kariye aur apni settings configure kariye:
```bash
cp .env.example .env
```

`.env` file mein apne MongoDB Atlas credentials daalne:
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

### 4. Application Start Kariye
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 5. Application Access Kariye
Browser mein jaiye: `http://localhost:8001`

## Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `DB_USERNAME` | MongoDB Atlas username | - |
| `DB_PASSWORD` | MongoDB Atlas password | - |
| `DB_CLUSTER` | MongoDB Atlas cluster URL | - |
| `DB_NAME` | Database ka naam | `url-shortner` |
| `PORT` | Server port | `8001` |
| `NODE_ENV` | Environment mode | `development` |
| `MONGODB_URI` | Complete MongoDB connection string | - |

## API Endpoints

### Short URL Banayiye
```http
POST /url
Content-Type: application/json

{
  "url": "https://example.com/very-long-url"
}
```

### Saare URLs Get Kariye
```http
GET /url
```

### Original URL Par Redirect Kariye
```http
GET /url/:shortId
```

### URL Analytics Get Kariye
```http
GET /url/:shortId/analytics
```

### URL Delete Kariye
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
- Sensitive data ke liye environment variables
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
- `npm run dev` - Development server start kariye nodemon ke saath
- `npm start` - Production server start kariye
- `npm install` - Dependencies install kariye

## Setup Guide - Step by Step

### MongoDB Atlas Setup
1. MongoDB Atlas par account banayiye ya login kariye
2. Naya cluster create kariye
3. Database user banayiye aur password set kariye
4. Network access mein IP address allow kariye (0.0.0.0/0 for all)
5. Connection string copy kariye

### Local Development
1. Project folder mein navigate kariye
2. Dependencies install kariye: `npm install`
3. `.env` file banayiye aur database credentials add kariye
4. Development server start kariye: `npm run dev`
5. Browser mein `http://localhost:8001` par jaiye

### Production Deployment
1. Environment variables properly set kariye
2. `NODE_ENV=production` set kariye
3. Production server start kariye: `npm start`



