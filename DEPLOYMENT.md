# JobHook Deployment Guide

## Environment Configuration

### Frontend Environment Variables

The frontend uses environment variables to determine which backend to connect to:

- **Local Development**: Uses `frontend/.env.local` (not committed to git)
- **Production**: Uses `frontend/.env.production` (committed to git)

### Environment Files

#### For Local Development
Create `frontend/.env.local`:
```
REACT_APP_API_URL=http://localhost:8080
```

#### For Production
The `frontend/.env.production` file is already configured:
```
REACT_APP_API_URL=https://jobhook-backend.onrender.com
```

## Deployment Steps

### 1. Backend Deployment (Render/Heroku/etc.)

1. Push your code to GitHub
2. Connect your repository to your hosting platform
3. Set build command: `cd backend && mvn clean package`
4. Set start command: `cd backend && java -jar target/JobPortal-0.0.1-SNAPSHOT.jar`
5. Set environment variables:
   - `JAVA_HOME=/opt/render/project/.jdk`
   - `MONGODB_URI=your_mongodb_connection_string`
   - `MAIL_USERNAME=your_email`
   - `MAIL_PASSWORD=your_app_password`

### 2. Frontend Deployment (Netlify/Vercel/etc.)

1. Connect your repository to your hosting platform
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/build`
4. Set environment variable:
   - `REACT_APP_API_URL=https://your-backend-url.com`

## Local Development

### Start Backend
```bash
cd backend
mvn spring-boot:run
```

### Start Frontend
```bash
cd frontend
npm start
```

## Important Notes

- The backend runs on port 8080
- The frontend runs on port 3000
- Make sure your MongoDB database is accessible from your hosting platform
- Update CORS settings if needed for your domain
